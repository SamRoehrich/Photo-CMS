import { useAuth0 } from "@auth0/auth0-react";

import ManagePhotos from "../../components/ManagePhotos";
import AdminPhotoUpload from "../../components/PhotoUpload";
// import EditTheme from "../../components/EditTheme";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4vh",
  },
});

const ManagePhotosPage = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const classes = useStyles();
  return isAuthenticated ? (
    <ManagePhotos />
  ) : (
    <div className={classes.root}>
      <Button onClick={() => loginWithRedirect()}>Login</Button>
    </div>
  );
};
export default ManagePhotosPage;
