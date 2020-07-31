import { useState } from "react";
import {
  TableRow,
  TableCell,
  Switch,
  Collapse,
  IconButton,
  Box,
  Typography,
  Select,
  TextField,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  iconStyles: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  formStyles: {
    marginLeft: 5,
    marginBottom: 20,
  },
  form: {
    marginLeft: 15,
  },
});

const PhotoListItem = ({ photo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(photo.isActive);
  const [title, setTitle] = useState(photo.title);
  const [tag, setTag] = useState(photo.tag);
  const [order, setOrder] = useState(photo.tagIndex);
  const [borderWidth, setBorderWidth] = useState(0);

  const classes = useStyles();

  const handleDelete = async (e) => {
    e.preventDefault();
    confirm(
      "This will delete the photo from the website, are you sure you want to do this?"
    );
    await fetch("http://localhost:5000/admin/deletePhoto", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({ id: photo.id }),
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let data = {};
    data.title = title;
    data.isActive = isActive;
    data.tag = tag;
    data.order = order;
    data.borderWidth = borderWidth;
    data.id = photo.id;
    data.link = photo.link;
    console.log(data);
    await fetch(
      "https://kyle-garrett-photo-server.herokuapp.com/admin/update",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "PUT",
        body: JSON.stringify(data),
      }
    );
  };

  const handleActiveChange = async () => {
    await fetch(
      "https://kyle-garrett-photo-server.herokuapp.com/admin/toggleActive",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "PUT",
        body: JSON.stringify({ isActive: !isActive, id: photo.id }),
      }
    );
    setIsActive(!isActive);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTagChange = (e) => {
    setTag(e.target.value);
  };
  const handleTagIndexChange = (e) => {
    setOrder(e.target.value);
  };
  const handleBorderWidthChange = (e) => {
    setBorderWidth(e.target.value);
  };

  return (
    <>
      <TableRow key={photo.id}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <KeyboardArrowUpIcon className={classes.iconStyles} />
            ) : (
              <KeyboardArrowDownIcon className={classes.iconStyles} />
            )}
          </IconButton>
        </TableCell>
        <TableCell align="left">{title}</TableCell>
        <TableCell>{tag}</TableCell>
        <TableCell>
          <a href={photo.link}>Photo</a>
        </TableCell>
        <TableCell>
          <Switch checked={isActive} onClick={handleActiveChange} />
        </TableCell>
        <TableCell align="center">
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                style={{ marginLeft: 15 }}
              >
                Picture Details
              </Typography>
            </Box>
            <form className={classes.form} onSubmit={handleFormSubmit}>
              <TextField
                id="picture-title"
                label="Picture Title"
                defaultValue={title}
                onChange={handleTitleChange}
                variant="outlined"
                className={classes.formStyles}
              />
              <FormControl variant="outlined">
                <InputLabel id="tag-select">Tag</InputLabel>
                <Select
                  labelId="tag-select"
                  label="Tag"
                  id="tag-select"
                  value={tag}
                  onChange={handleTagChange}
                  variant="outlined"
                  className={classes.formStyles}
                >
                  <MenuItem value="home">Home</MenuItem>
                  <MenuItem value="climbing">Climbing</MenuItem>
                  <MenuItem value="not climbing">Not Climbing</MenuItem>
                  <MenuItem value="portraits">Portraits</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="picture-tag-index"
                label="Display Order"
                type="number"
                defaultValue={order}
                onChange={handleTagIndexChange}
                variant="outlined"
                className={classes.formStyles}
              />
              <TextField
                id="picture-border-width"
                label="Border Width"
                type="number"
                defaultValue={borderWidth}
                onChange={handleBorderWidthChange}
                variant="outlined"
                className={classes.formStyles}
              />
              <Button type="submit" style={{ marginLeft: 80, marginTop: 10 }}>
                Update Image
              </Button>
            </form>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
export default PhotoListItem;
