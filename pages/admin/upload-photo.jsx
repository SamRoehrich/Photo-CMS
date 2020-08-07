import { useAuth0 } from "@auth0/auth0-react";

import AdminPhotoUpload from "../../components/PhotoUpload";
import { Button } from "@material-ui/core";

const UploadPhotoPage = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return isAuthenticated ? (
    <AdminPhotoUpload />
  ) : (
    <Button onClick={() => loginWithRedirect()}>Login</Button>
  );
};
export default UploadPhotoPage;
