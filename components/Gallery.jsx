// import SimpleCard from "./PhotoCard";

// const Gallery = ({ pics }) => {
//   return (
//     <div>
//       {pics.map((pic) => (
//         <SimpleCard picture={pic} />
//       ))}
//     </div>
//   );
// };
// export default Gallery;

import ImageGallery from "react-image-gallery";

const Gallery = ({ pics }) => {
  const images = pics.map((pic) => {
    return {
      original: pic.link,
      thumbnail: pic.thumbnail,
    };
  });
  return <ImageGallery items={images} />;
};
export default Gallery;
