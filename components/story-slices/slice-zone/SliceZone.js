import React from 'react';
import TextSection from '../text-section/TextSection';
import ImageGallery from '../imageGallery/ImageGallery';

export default function SliceZone({ sliceZone }) {
  return (
    <>
      {sliceZone.map((slice, index) => {
        const { slice_type: sliceType, items, primary } = slice;
        switch (sliceType) {
          case 'text':
            return <TextSection {...primary} key={`slice-${index}`} />;
          case 'image_gallery':
            return <ImageGallery images={items} key={`slice-${index}`} />;
          default:
            return null;
        }
      })}
    </>
  );
}
