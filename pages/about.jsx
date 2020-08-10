import { Button } from "@material-ui/core";
import AboutMe from "../components/AboutMe";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const AboutPage = () => {
  const classes = useStyles();
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
