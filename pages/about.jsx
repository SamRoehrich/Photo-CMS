import { Button } from "@material-ui/core";
import AboutMe from "../components/AboutMe";
import { makeStyles } from "@material-ui/styles";
import { useGalleryState } from "../components/Gallery/GalleryContext";
import { useEffect } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const AboutPage = () => {
  const classes = useStyles();
  const { dispatch } = useGalleryState();

  useEffect(() => {
    dispatch({ type: "about-page" });
  });

  return (
    <div className={classes.root}>
      <AboutMe />
      <Button>
        <a href="mailto:kyle@kgphoto.com">Contact me</a>
      </Button>
    </div>
  );
};
export default AboutPage;
