import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardMedia, CardActionArea } from "@material-ui/core";
import { useGalleryState } from "./GalleryContext";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 140,
    margin: 10,
    border: "2px solid white",
  },
  activeRoot: {
    minWidth: 140,
    margin: 10,
    border: `2px solid ${theme.palette.secondary.main}`,
  },
  media: {
    height: 100,
    width: 140,
  },
}));

const ThumbnailCard = ({ thumbnail, index }) => {
  const classes = useStyles();
  const { state, dispatch } = useGalleryState();

  function handleThumbnailClick(index) {
    dispatch({ type: "thumbnail-click", payload: index });
  }
  return (
    <Card
      className={
        index === state.currentPhotoIndex ? classes.activeRoot : classes.root
      }
      onClick={() => handleThumbnailClick(index)}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={thumbnail !== undefined ? thumbnail.thumbnail : ""}
        />
      </CardActionArea>
    </Card>
  );
};

export default ThumbnailCard;
