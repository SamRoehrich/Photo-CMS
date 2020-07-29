import SimpleCard from "./PhotoCard";

const Gallery = ({ pics }) => {
  return (
    <div>
      {pics.map((pic) => (
        <SimpleCard picture={pic} />
      ))}
    </div>
  );
};
export default Gallery;
