import React from 'react';
import TextSection from '../text-section/TextSection';
import ImageGallery from '../image-gallery/ImageGallery';
import FullSizeImageSlice from '../full-size-image-slice/FullSizeImageSlice';

export default function SliceZone({ sliceZone }) {
  return (
    <>
      {sliceZone.map((slice, index) => {
        const { slice_type: sliceType, items, primary } = slice;
        switch (sliceType) {
          case 'text':
            return <TextSection {...primary} key={`slice-${index}`} />;
          case 'full_size_image':
            return <FullSizeImageSlice {...primary} />;
          case 'image_gallery':
            return <ImageGallery images={items} key={`slice-${index}`} />;
          default:
            return null;
        }
      })}
    </>
  );
}
