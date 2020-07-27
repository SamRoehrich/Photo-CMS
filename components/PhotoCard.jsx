import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia, CardActionArea } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    margin: 10,
    marginLeft: 50,
  },
  media: {
    height: 750,
  },
});

export default function SimpleCard({ picture }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={picture.link !== undefined ? picture.link : ""}
        />
      </CardActionArea>
    </Card>
  );
}
