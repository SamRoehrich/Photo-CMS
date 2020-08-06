import { GridList, GridListTile } from "@material-ui/core";

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
    width: "100%",
  },
});

const Thumbnails = () => {
  const { state, dispatch } = useGalleryState();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList
        cols={2}
        cellHeight={140}
        className={classes.gridList}
        spacing={1}
      >
        {state.thumbnails.map((item, i) => (
          <GridListTile style={{ height: "auto", width: "auto" }}>
            <ThumbnailCard thumbnail={item} index={i} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
  // return <div>thumbnails</div>;
};
export default Thumbnails;
