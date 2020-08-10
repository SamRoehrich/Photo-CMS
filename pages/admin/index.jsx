import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";

const AdminPage = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return isAuthenticated ? (
    <div>admin home page</div>
  ) : (
    <Button onClick={() => loginWithRedirect()}>Login</Button>
  );
};
export default AdminPage;
