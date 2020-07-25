import styled from "styled-components";
import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    fetch("http://kgphotos-appliedefforts-main.s3.amazonaws.com/", {
      mode: "cors",
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <p>Gallery</p>
    </div>
  );
};
export default Gallery;
