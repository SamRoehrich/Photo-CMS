import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardMedia, CardActionArea } from "@material-ui/core";
import { useGalleryState } from "./GalleryContext";

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    margin: 10,
    marginLeft: 50,
    border: "3px solid white",
  },
  activeRoot: {
    minWidth: 100,
    margin: 10,
    marginLeft: 50,
    border: "2px solid #E6714A",
  },
  media: {
    height: 150,
    width: 200,
  },
});

const ThumbnailCard = ({ thumbnail, index }) => {
  const classes = useStyles();
  const { state, dispatch } = useGalleryState();

  function handleThumbnailClick(index) {
    console.log(index);
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
