import React from "react";

const ImageGallery = ({ slice }) => {
  return (
    <>
      <h3>Image Gallery: </h3>
      {slice.items.map((item, index) => (
        <GalleryItem item={item} key={index} />
      ))}
    </>
  );
};

const GalleryItem = ({ item }) => (
  <img
    style={{ width: "500px" }}
    src={item.gallery_image.url}
    alt={item.gallery_image.alt}
  />
);

export default ImageGallery;
