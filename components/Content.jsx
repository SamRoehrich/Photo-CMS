import { Grid } from "@material-ui/core";
import { useRouter } from "next/router";

import Gallery from "./Gallery/Gallery";

const Content = () => {
  const router = useRouter();
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} xl={8}>
        <Gallery route={router.route} />
      </Grid>
    </Grid>
  );
};
export default Content;
