import { useAuth0 } from "@auth0/auth0-react";

import ManagePhotos from "../../components/ManagePhotos";
import AdminPhotoUpload from "../../components/PhotoUpload";
// import EditTheme from "../../components/EditTheme";
import { Button } from "@material-ui/core";

const AdminPage = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return isAuthenticated ? (
    <ManagePhotos />
  ) : (
    <Button onClick={() => loginWithRedirect()}>Login</Button>
  );
};
export default AdminPage;
