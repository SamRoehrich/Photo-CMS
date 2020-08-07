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
  console.log(theme);
  return (
    loading === false && (
      <Paper className={classes.root}>
        <Card
          className={classes.card}
          style={{ backgroundColor: theme.primaryColor }}
        >
          <Typography variant="caption" style={{ textAlign: "center" }}>
            Primary Color
          </Typography>
          <TextField value={theme.primaryColor} />
          <Button>Change Color</Button>
        </Card>
        <Card
          className={classes.card}
          style={{ backgroundColor: theme.secondaryColor }}
        >
          <Typography variant="caption" style={{ textAlign: "center" }}>
            Secondary Color
          </Typography>
          <TextField value={theme.secondaryColor} />
          <Button>Change Color</Button>
        </Card>
        <Card
          className={classes.card}
          style={{ backgroundColor: theme.tertiaryColor }}
        >
          <Typography variant="caption" style={{ textAlign: "center" }}>
            Tertiary Color
          </Typography>
          <TextField value={theme.tertiaryColor} />
          <Button>Change Color</Button>
        </Card>
        <Card
          className={classes.card}
          style={{ backgroundColor: theme.ascentColor }}
        >
          <Typography variant="caption" style={{ textAlign: "center" }}>
            Ascent Color
          </Typography>
          <TextField value={theme.ascentColor} />
          <Button>Change Color</Button>
        </Card>
        <Card
          className={classes.card}
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <Typography variant="caption" style={{ textAlign: "center" }}>
            Background Color
          </Typography>
          <TextField value={theme.backgroundColor} />
          <Button>Change Color</Button>
        </Card>
        <Card
          className={classes.card}
          style={{ backgroundColor: theme.textPrimaryColor }}
        >
          <Typography
            variant="caption"
            style={{ textAlign: "center", color: "white" }}
          >
            Text Primary Color
          </Typography>
          <TextField
            value={theme.textPrimaryColor}
            style={{ color: "white" }}
          />
          <Button>Change Color</Button>
        </Card>
        <Card
          className={classes.card}
          style={{ backgroundColor: theme.textSecondaryColor }}
        >
          <Typography variant="caption" style={{ textAlign: "center" }}>
            Text Secondary Color
          </Typography>
          <TextField value={theme.textSecondaryColor} />
          <Button>Change Color</Button>
        </Card>
      </Paper>
    )
  );
};
export default EditTheme;
