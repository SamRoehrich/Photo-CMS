import { Cloudinary as CoreCloudinary, Util } from "cloudinary-core";

export const fetchPhotos = (cloudName) => {
  const options = {
    cloudName,
    format: "json",
    type: "list",
    version: Math.ceil(new Date().getTime() / 1000),
  };

  const urlPath = url("myphotoalbum", options);

  return fetch(urlPath)
    .then((res) => res.text)
    .then((text) => console.log(text));
};
