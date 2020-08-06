import { GridList } from "@material-ui/core";

import { useGalleryState } from "./GalleryContext";
import ThumbnailCard from "./ThumbnailCard";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    height: "calc(100vh - 80px)",
    // width: 300,
  },
});

const Thumbnails = () => {
  const { state, dispatch } = useGalleryState();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cols={1} cellHeight={150} className={classes.gridList}>
        {state.thumbnails.map((item, i) => (
          <ThumbnailCard thumbnail={item} index={i} />
        ))}
      </GridList>
    </div>
  );
  // return <div>thumbnails</div>;
};
export default Thumbnails;
