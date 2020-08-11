import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useRouter } from "next/router";

import Header from "./Header";
import SideBar from "./SideBar";
import Thumbnails from "./Gallery/Thumbnails";

const useStyles = makeStyles({
  sideBar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  base: {
    width: "100%",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <Grid container direction="column" className={classes.base}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={1} className={classes.sideBar}>
          <Hidden smDown>
            <SideBar />
          </Hidden>
        </Grid>
        {router.pathname.includes("admin") ||
        router.pathname.includes("about") ? (
          <Grid item sm={11}>
            {children}
          </Grid>
        ) : (
          <Grid item xs={12} sm={9}>
            {children}
          </Grid>
        )}
        <Grid item xs={false} sm={2}>
          {router.pathname.includes("admin") ||
          router.pathname.includes("about") ? (
            <Hidden xlDown>
              <Thumbnails />
            </Hidden>
          ) : (
            <Hidden smDown>
              <Thumbnails />
            </Hidden>
          )}
        </Grid>
      </Grid>
      <Hidden smUp>
        <Grid item container>
          <Thumbnails />
        </Grid>
      </Hidden>
    </Grid>
  );
};
export default Layout;
