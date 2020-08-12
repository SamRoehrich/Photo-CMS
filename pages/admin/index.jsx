import { useAuth0 } from "@auth0/auth0-react";
import { Button, makeStyles } from "@material-ui/core";
import EditAboutText from "../../components/EditAboutText";
import Link from "next/link";
import { useFetchUser } from "../../utils/user";
import Layout from "../../components/Layout";
import { buildTheme } from "../../utils/buildTheme";
import Theme from "../../components/Theme";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4vh",
  },
});

const AdminPage = ({ theme }) => {
  const { user, loading } = useFetchUser();
  const classes = useStyles();

  return user && !loading ? (
    <Theme theme={theme}>
      <Layout>
        <EditAboutText />
      </Layout>
    </Theme>
  ) : (
    <div className={classes.root}>
      <Link href="/api/login">
        <a>Login</a>
      </Link>
    </div>
  );
};
export default AdminPage;

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
