import { useAuth0 } from "@auth0/auth0-react";

import AdminPhotoUpload from "../../components/PhotoUpload";
import { Button, makeStyles } from "@material-ui/core";
import { useFetchUser } from "../../utils/user";
import Link from "next/link";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4vh",
  },
});

const UploadPhotoPage = () => {
  const { user, loading } = useFetchUser();
  // const classes = useStyles();
  return user && !loading ? (
    <AdminPhotoUpload />
  ) : (
    <Link href="/api/login">
      <a>Login</a>
    </Link>
  );
};
export default UploadPhotoPage;
