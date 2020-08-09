import {
  useEffect,
  useState,
  useReducer,
  useContext,
  createContext,
} from "react";
import { Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import EditTheme from "../../components/EditTheme";

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

const EditThemePage = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  //   return isAuthenticated ? (
  //     <EditTheme />
  //   ) : (
  //     <Button onClick={() => loginWithRedirect()}>Login</Button>
  //   );

  return (
    <EditThemeState>
      <EditTheme />
    </EditThemeState>
  );
};
export default EditThemePage;
