import { useAuth0 } from "@auth0/auth0-react";

import ManagePhotos from "../../components/ManagePhotos";
import AdminPhotoUpload from "../../components/PhotoUpload";
// import EditTheme from "../../components/EditTheme";
import { Button, makeStyles } from "@material-ui/core";
import { useFetchUser } from "../../utils/user";
import Link from "next/link";
import Theme from "../../components/Theme";
import Layout from "../../components/Layout";
import { buildTheme } from "../../utils/buildTheme";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4vh",
  },
});

const ManagePhotosPage = ({ theme }) => {
  const { user, loading } = useFetchUser();
  // const classes = useStyles();
  return user && !loading ? (
    <Theme theme={theme}>
      <Layout>
        <ManagePhotos />
      </Layout>
    </Theme>
  ) : (
    <Link href="/api/login">
      <a>Login</a>
    </Link>
  );
};
export default ManagePhotosPage;

export async function getServerSideProps() {
  const apiTheme = await fetch(
    "https://kyle-garrett-photo-server.herokuapp.com/theme"
  );
  const jsonTheme = await apiTheme.json();
  const theme = buildTheme(jsonTheme);

  return {
    props: {
      theme,
    },
  };
}
