import { TextField, FormLabel, Button } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    margin: "0 auto",
  },
  formItem: {
    marginTop: 10,
    marginBottom: 15,
    padding: 5,
  },
  groupedItems: {
    display: "flex",
    flexDirection: "column",
  },
});

const AdminPhotoUpload = () => {
  const [tag, setTag] = useState("home");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [borderWidth, setBorderWidth] = useState(5);
  const [cloudLocation, setCloudLocation] = useState("");
  const [description, setDescription] = useState("");
  const [cloudLink, setCloudLink] = useState("");
  const [thumbnailLink, setThumbnailLink] = useState("");
  const classes = useStyles();

  function handleTagChange(e) {
    setTag(e.target.value);
  }
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleBorderWidthChange(e) {
    setBorderWidth(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }
  async function uploadImage(e) {
    console.log("uploading image...");
    setLoading(true);
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "kgphoto");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dchopcxko/image/upload/",
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.json())
      .catch((e) => console.log(e));
    const UPLOAD_PREFIX = `https://res.cloudinary.com/dchopcxko/image/upload/bo_${borderWidth}px_solid_rgb:ffffff,c_scale,h_650/`;
    const location = res.url.slice(49);
    const link = UPLOAD_PREFIX + location;
    setThumbnailLink(res.url);
    setCloudLink(link);
    setCloudLocation(location);
    setLoading(false);
  }

  async function uploadToServer(e) {
    e.preventDefault();
    setLoading(true);
    const data = {
      cloudLink,
      title,
      tag,
      borderWidth,
      cloudLocation,
      description,
      thumbnailLink,
    };
    await fetch(
      "https://kyle-garrett-photo-server.herokuapp.com/admin/upload",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    setTag("home");
    setTitle("");
    setCloudLink("");
    setCloudLocation("");
    setBorderWidth(32);
    setDescription("");
    setLoading(false);
  }

  return (
    <Paper className={classes.root}>
      <TextField
        placeholde="Picture Title"
        className={classes.formItem}
        variant="outlined"
        label="Title"
        fullWidth
        onChange={handleTitleChange}
      />
      <TextField
        label="Description"
        value={description}
        onChange={handleDescriptionChange}
        variant="outlined"
        className={classes.formItem}
      />
      <FormControl className={classes.formItem}>
        <InputLabel id="tag">Tag</InputLabel>
        <Select
          labelId="tag"
          id="tag-select"
          value={tag}
          onChange={handleTagChange}
          fullWidth
        >
          <MenuItem value="home">Home</MenuItem>
          <MenuItem value="not climbing">Not Climbing</MenuItem>
          <MenuItem value="portrait">Portrait</MenuItem>
          <MenuItem value="climbing">Climbing</MenuItem>
        </Select>
        <TextField
          type="number"
          label="Order"
          defaultValue="0"
          className={classes.formItem}
        />
      </FormControl>

      <TextField
        type="number"
        value={borderWidth}
        label="Border Width"
        onChange={handleBorderWidthChange}
        variant="outlined"
        className={classes.formItem}
      />

      <input
        className={classes.formItem}
        type="file"
        id="file"
        name="file"
        placeholder="Upload an image"
        required
        disabled={loading}
        onChange={uploadImage}
      />
      <TextField
        className={classes.formItem}
        value={cloudLink}
        placeholder="Link"
        disabled
        fullWidth
        variant="outlined"
      />
      <Button onClick={uploadToServer} disabled={loading}>
        Upload Photo
      </Button>
    </Paper>
  );
};
export default AdminPhotoUpload;
