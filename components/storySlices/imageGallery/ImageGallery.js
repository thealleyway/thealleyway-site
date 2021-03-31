import React from 'react';
import { renderRichText } from '../../../lib/richText';

export default function ImageGallery({ images }) {
  return (
    <>
      <h3>Image Gallery: </h3>
      {images.map((item, index) => {
        return <GalleryItem item={item} key={index} />;
      })}
    </>
  );
}

function GalleryItem({ item }) {
  const { gallery_image: galleryImage, image_caption: imageCaption } = item;

  return (
    <>
      <img
        style={{ width: '500px' }}
        src={galleryImage.url}
        alt={galleryImage.alt}
      />
      {renderRichText(imageCaption)}
    </>
  );
}
