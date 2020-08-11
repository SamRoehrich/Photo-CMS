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

const AboutMe = ({ text }) => {
  const classes = useStyles();
  return (
    text !== undefined && (
      <Paper className={classes.root}>
        <Typography variant="body1" className={classes.text}>
          {text.content}
        </Typography>
      </Paper>
    )
  );
};
export default AboutMe;
