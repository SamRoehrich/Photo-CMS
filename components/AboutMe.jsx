import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: "3rem",
    marginTop: "3rem",
    backgroundColor: theme.palette.background.default,
  },
  text: {
    fontSize: 20,
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("https:http://kyle-garrett-photo-server.herokuapp.com/about")
      .then((res) => res.json())
      .then((displayText) => setText(displayText));
  });
  return (
    <Paper className={classes.root}>
      <Typography variant="body1" className={classes.text}>
        {text}
      </Typography>
    </Paper>
  );
};
export default AboutMe;
