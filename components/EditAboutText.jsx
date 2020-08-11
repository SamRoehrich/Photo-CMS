import { TextareaAutosize, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: 10,
    width: "100%",
    fontSize: 24,
  },
});

const EditAboutText = () => {
  const [text, setText] = useState("");
  const [id, setId] = useState(0);
  const classes = useStyles();
  useEffect(async () => {
    const textFromApi = await fetch(
      "https://kyle-garrett-photo-server.herokuapp.com/about"
    );
    const text = await textFromApi.json();
    setText(text[0].content);
  }, [id]);
  function handleChange(e) {
    setText(e.target.value);
  }
  function handleSubmit() {
    fetch("https://kyle-garrett-photo-server.herokuapp.com/about", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ content: text }),
    });
  }
  return (
    <>
      <TextareaAutosize
        className={classes.root}
        value={text}
        onChange={(e) => handleChange(e)}
      />
      <Button onClick={() => handleSubmit()}>Change About Text</Button>
    </>
  );
};
export default EditAboutText;
