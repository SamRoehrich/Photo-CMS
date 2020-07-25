import { Grid } from "@material-ui/core";
import PhotoCard from "../components/PhotoCard";

import CloudPics from "./Cloudinary";

const Content = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} xl={8}>
        <PhotoCard />
      </Grid>
    </Grid>
  );
};
export default Content;
