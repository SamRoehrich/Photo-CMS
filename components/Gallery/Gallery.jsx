import { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import { useGalleryState } from "./GalleryContext";

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

  function handlePrevClick(e) {
    e.preventDefault();
    dispatch({ type: "move-backward" });
  }

  function handleNextClick(e) {
    e.preventDefault();
    dispatch({ type: "move-forward" });
  }

  useEffect(() => {
    dispatch({ type: "load-photos", payload: pics });
  }, [pics]);

  return (
    <>
      <IconButton onClick={handlePrevClick}>
        <NavigateBeforeIcon />
      </IconButton>
      {state.photos && state.photos[state.currentPhotoIndex]}
      <IconButton>
        <NavigateNextIcon onClick={handleNextClick} />
      </IconButton>
    </>
  );
};
export default Gallery;
