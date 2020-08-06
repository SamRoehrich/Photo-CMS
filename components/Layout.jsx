import { Grid, Hidden } from "@material-ui/core";
import Header from "./Header";
import SideBar from "./SideBar";

import { makeStyles } from "@material-ui/styles";
import Thumbnails from "./Gallery/Thumbnails";

const useStyles = makeStyles({
  sideBar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={1} className={classes.sideBar}>
          <Hidden smDown>
            <SideBar />
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={8}>
          {children}
        </Grid>
        <Grid item xs={false} sm={3}>
          <Hidden smDown>
            <Thumbnails />
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Layout;
