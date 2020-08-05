import { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

import { useGalleryState } from "./GalleryContext";

const useStyles = makeStyles({
  root: {
    marginTop: "40px",
    margin: "0 auto",
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

  useEffect(() => {
    dispatch({ type: "load-photos", payload: pics });
  }, [pics]);

  return <div>{state.photos && state.photos[state.currentPhotoIndex]}</div>;
};
export default Gallery;
