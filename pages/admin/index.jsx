import { useAuth0 } from "@auth0/auth0-react";
import { Button, makeStyles } from "@material-ui/core";
import EditAboutText from "../../components/EditAboutText";
import Link from "next/link";
import { useFetchUser } from "../../utils/user";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4vh",
  },
});

const AdminPage = () => {
  const { user, loading } = useFetchUser();
  const classes = useStyles();

  return user && !loading ? (
    <EditAboutText />
  ) : (
    <div className={classes.root}>
      <Link href="/api/login">
        <a>Login</a>
      </Link>
    </div>
  );
};
export default AdminPage;
