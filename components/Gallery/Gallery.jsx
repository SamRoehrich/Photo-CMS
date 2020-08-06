import { useEffect, useRef } from "react";
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
  const currentPhotoRef = useRef(null);
  const { state, dispatch } = useGalleryState();
  useEffect(() => {
    dispatch({ type: "load-photos", payload: pics });
    currentPhotoRef.current = state.photos[state.currentPhotoIndex];
  }, [pics]);

  useEffect(() => {
    currentPhotoRef.current = state.photos[state.currentPhotoIndex];
    console.log("ref changed");
  }, [state.currentPhotoIndex]);

  return <div>{currentPhotoRef.current}</div>;
};
export default Gallery;
