import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardMedia, CardActionArea, IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useGalleryState } from "./GalleryContext";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    minWidth: 100,
    margin: 10,
    marginLeft: 50,
    display: "flex",
    border: `${props.borderWidth || 5} solid ${
      theme.palette.primary.secondary
    }`,
  }),
  button: {
    backgroundColor: "none",
  },
  media: (props) => ({
    height: "calc(100vh - 80px)",
    border: `${props.borderWidth || 5} solid ${
      theme.palette.primary.secondary
    }`,
  }),
}));

export default function SimpleCard({ picture }) {
  const classes = useStyles(picture);

  const { state, dispatch } = useGalleryState();

  function handlePrevClick(e) {
    e.preventDefault();
    dispatch({ type: "move-backward" });
  }

  function handleNextClick(e) {
    e.preventDefault();
    dispatch({ type: "move-forward" });
  }
  console.log("picture" + picture);
  return (
    <Card className={classes.root}>
      <IconButton onClick={handlePrevClick} className={classes.button}>
        <NavigateBeforeIcon />
      </IconButton>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={picture.link !== undefined ? picture.link : ""}
        />
      </CardActionArea>
      <IconButton onClick={handleNextClick}>
        <NavigateNextIcon />
      </IconButton>
    </Card>
  );
}
