import { TextareaAutosize } from "@material-ui/core";
import { useState, useEffect } from "react";

const EditAboutText = () => {
  const [text, setText] = useState("");
  const [id, setId] = useState(0);
  useEffect(async () => {
    const textFromApi = await fetch(
      "https://kyle-garrett-photo-server.herokuapp.com/about"
    );
    const text = await textFromApi.json();
    setText(text);
  }, [id]);
  return <TextareaAutosize value={text} onChange={handleChange} />;
};
export default EditAboutText;
