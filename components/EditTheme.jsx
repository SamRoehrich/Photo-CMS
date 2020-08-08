import { useEffect, useState } from "react";
import {
  Paper,
  Card,
  CardMedia,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 75,
    flexWrap: "wrap",
    backgroundColor: theme.palette.primary.main,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 300,
    width: "20vw",
    margin: 10,
    backgroundColor: theme.palette.background.default,
  },
}));

const EditTheme = () => {
  const [theme, setTheme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(0);
  const classes = useStyles();
  useEffect(() => {
    fetch("http://localhost:5000/theme", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => setTheme(result[0]))
      .then(() => setLoading(false));
  }, [id]);
  return (
    loading === false && (
      <>
        <Paper className={classes.root}>
          {Object.entries(theme).map((item) => {
            return <EditCard item={item} />;
          })}
          <Button style={{ backgroundColor: "yellow" }}>
            Finialize Theme changes
          </Button>
        </Paper>
      </>
    )
  );
};
export default EditTheme;

const EditCard = (item) => {
  const [key, value] = item.item;
  const [inputValue, setInputValue] = useState(value);
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography variant="body1" style={{ textAlign: "center" }}>
        {key}
      </Typography>
      <TextField
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div style={{ width: "100%", height: "50px", backgroundColor: value }} />
      <Button disabled={key == "id" ? true : false}>Change Value</Button>
    </Card>
  );
};
