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

const EditThemePage = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const classes = useStyles();
  return isAuthenticated ? (
    <EditThemeState>
      <EditTheme />
    </EditThemeState>
  ) : (
    <div className={classes.root}>
      <Button onClick={() => loginWithRedirect()}>Login</Button>
    </div>
  );
};
export default EditThemePage;
