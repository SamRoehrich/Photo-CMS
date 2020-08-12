import {
  useEffect,
  useState,
  useReducer,
  useContext,
  createContext,
} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import EditTheme from "../../components/EditTheme";
import { Button, makeStyles } from "@material-ui/core";
import { useFetchUser } from "../../utils/user";
import Link from "next/link";
import Theme from "../../components/Theme";
import Layout from "../../components/Layout";
import { buildTheme } from "../../utils/buildTheme";

const EditThemeContext = createContext();
const EditThemeProvider = EditThemeContext.Provider;

const initialState = { loading: true, theme: {} };

function reducer(state, action) {
  switch (action.type) {
    case "load-theme": {
      return { loading: false, theme: action.payload[0] };
    }
    case "edit-value": {
      let [key, value] = action.payload;
      let updatedTheme = { ...state.theme };
      for (let item in state.theme) {
        if (item == key) {
          updatedTheme[key] = value;
        }
      }
      return { ...state, theme: updatedTheme };
    }

    default:
      return state;
  }
}

function EditThemeState({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const defaultValue = { state, dispatch };
  return <EditThemeProvider value={defaultValue}>{children}</EditThemeProvider>;
}

export function useEditThemeState() {
  const all = useContext(EditThemeContext);
  return all;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4vh",
  },
});

const EditThemePage = ({ theme }) => {
  const { user, loading } = useFetchUser();
  // const classes = useStyles();
  return user && !loading ? (
    <Theme theme={theme}>
      <Layout>
        <EditThemeState>
          <EditTheme />
        </EditThemeState>
      </Layout>
    </Theme>
  ) : (
    <Link href="/api/login">
      <a>Login</a>
    </Link>
  );
};
export default EditThemePage;

export async function getServerSideProps() {
  const apiTheme = await fetch(
    "https://kyle-garrett-photo-server.herokuapp.com/theme"
  );
  const jsonTheme = await apiTheme.json();
  const theme = buildTheme(jsonTheme);

  return {
    props: {
      theme,
    },
  };
}
