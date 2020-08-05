import AliceCarousel from "react-alice-carousel";
import { makeStyles } from "@material-ui/styles";
import { CardMedia } from "@material-ui/core";
import { useGalleryState } from "./GalleryContext";
import { useEffect } from "react";

const useStyles = makeStyles({
  root: {
    marginTop: "40px",
  },
  media: {
    height: 700,
    paddingTop: "56.25%",
    marginTop: 30,
  },
});

const Gallery = ({ pics }) => {
  const classes = useStyles();
  const { state, dispatch } = useGalleryState();

  const activeImages = pics.map((pic) => {
    if (pic.isActive) return pic;
  });
  activeImages.sort((a, b) => b.tagIndex - a.tagIndex);

  const images = activeImages.map((pic) => {
    return {
      original: pic.link,
      thumbnail: pic.thumbnail,
      borderWidth: pic.borderWidth,
    };
  });

  useEffect(() => {
    dispatch({ type: "load-photos", payload: images });
  }, [pics]);

  return (
    //   <AliceCarousel autoHeight dotsDisabled={true}>
    //     {images.map((image) => (
    //       <CardMedia image={image.original} className={classes.media} />
    //     ))}
    //   </AliceCarousel>
    <p>gallery</p>
  );
};
export default Gallery;
