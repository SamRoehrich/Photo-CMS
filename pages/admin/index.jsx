import { useAuth0 } from "@auth0/auth0-react";
import { Button, makeStyles } from "@material-ui/core";
import EditAboutText from "../../components/EditAboutText";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4vh",
  },
});

const AdminPage = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const classes = useStyles();

  return isAuthenticated ? (
    <EditAboutText />
  ) : (
    <div className={classes.root}>
      <Button onClick={() => loginWithRedirect()}>Login</Button>
    </div>
  );
};
export default AdminPage;
