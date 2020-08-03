import { Paper, Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";

const AdminLogin = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Paper>
      <Button onClick={() => loginWithRedirect()}>Login</Button>
    </Paper>
  );
};
export default AdminLogin;
