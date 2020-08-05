import PhotoCard from "./PhotoCard";
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
  console.log(pics);

  useEffect(() => {
    dispatch({ type: "load-photos", payload: pics });
  }, [pics]);

  return <>{state.photos && state.photos[state.currentPhotoIndex]}</>;
};
export default Gallery;
