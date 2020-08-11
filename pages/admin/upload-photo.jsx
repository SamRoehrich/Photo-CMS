import { useAuth0 } from "@auth0/auth0-react";

import AdminPhotoUpload from "../../components/PhotoUpload";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4vh",
  },
});

const UploadPhotoPage = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const classes = useStyles();
  return isAuthenticated ? (
    <AdminPhotoUpload />
  ) : (
    <div className={classes.root}>
      <Button onClick={() => loginWithRedirect()}>Login</Button>
    </div>
  );
};
export default UploadPhotoPage;
