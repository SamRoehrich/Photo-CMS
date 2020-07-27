import { useEffect, useState } from "react";
import SimpleCard from "./PhotoCard";

const Gallery = ({ route }) => {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    fetch(`https://kyle-garrett-photo-server.herokuapp.com/photos${route}`)
      .then((response) => response.json())
      .then((res) => setPics(res))
      .catch((e) => console.log(e));
  }, [route]);
  return (
    <div>
      {pics.map((pic) => (
        <SimpleCard picture={pic} />
      ))}
    </div>
  );
};
export default Gallery;
