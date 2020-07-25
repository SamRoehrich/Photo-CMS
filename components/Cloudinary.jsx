import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";

const CloudPics = () => {
  console.log(CloudinaryContext);
  return (
    <CloudinaryContext cloudName="dchopcxko">
      <Image publidId="v1595522752/IMG_1707_zf5re6.jpg" />
    </CloudinaryContext>
  );
};
export default CloudPics;
