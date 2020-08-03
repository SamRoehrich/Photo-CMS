import ImageGallery from "react-image-gallery";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "40px",
  },
});

const Gallery = ({ pics }) => {
  const activeImages = pics.map((pic) => {
    if (pic.isActive) return pic;
  });
  activeImages.sort((a, b) => b.tagIndex - a.tagIndex);

  const images = activeImages.map((pic) => {
    return {
      original: pic.link,
      thumbnail: pic.thumbnail,
    };
  });

  const classes = useStyles();
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      showFullscreenButton={false}
      showThumbnails={false}
      originalClass={classes.root}
    />
  );
};
export default Gallery;
