import { useAuth0 } from "@auth0/auth0-react";
import EditTheme from "../../components/EditTheme";
import { Button } from "@material-ui/core";

const EditThemePage = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  //   return isAuthenticated ? (
  //     <EditTheme />
  //   ) : (
  //     <Button onClick={() => loginWithRedirect()}>Login</Button>
  //   );

  return <EditTheme />;
};
export default EditThemePage;
