import ImageGallery from "react-image-gallery";

const Gallery = ({ pics }) => {
  const images = pics.map((pic) => {
    return {
      original: pic.link,
      thumbnail: pic.thumbnail,
      originalClass: "width: 100%",
    };
  });
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      showFullscreenButton={false}
      // showThumbnails={false}
    />
  );
};
export default Gallery;
