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
import { useEditThemeState } from "../pages/admin/edit-theme";

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
  const { state, dispatch } = useEditThemeState();
  const classes = useStyles();
  function handleSubmit() {
    fetch(
      process.env.NODE_ENV == "production"
        ? PRODUCTION_API_URL + "admin/edit-theme"
        : "http://localhost:5000/admin/edit-theme",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "PUT",
        body: JSON.stringify({ theme: state.theme }),
      }
    );
  }
  useEffect(() => {
    fetch(
      process.env.NODE_ENV == "production"
        ? PRODUCTION_API_URL + "theme"
        : "http://localhost:5000/theme",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((jsonTheme) =>
        dispatch({ type: "load-theme", payload: jsonTheme })
      );
  }, [state.loading]);
  return (
    state.loading === false && (
      <>
        <Paper className={classes.root}>
          {Object.entries(state.theme).map((item) => {
            return <EditCard item={item} />;
          })}
          <Button
            style={{ backgroundColor: "yellow" }}
            onClick={() => handleSubmit()}
          >
            Finialize Theme changes
          </Button>
        </Paper>
      </>
    )
  );
};
export default EditTheme;

const EditCard = (item) => {
  const { dispatch } = useEditThemeState();
  const [key, value] = item.item;
  const [inputValue, setInputValue] = useState(value);
  const classes = useStyles();
  function handleValueChange(key, value) {
    dispatch({ type: "edit-value", payload: [key, value] });
  }
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
      <Button
        disabled={key == "id" ? true : false}
        onClick={() => handleValueChange(key, inputValue)}
      >
        Change Value
      </Button>
    </Card>
  );
};
