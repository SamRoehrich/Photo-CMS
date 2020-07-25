import { Grid } from "@material-ui/core";
import Header from "../components/Header";
import Content from "../components/Content";
import SideBar from "../components/SideBar";

const HomePage = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default HomePage;
