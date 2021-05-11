import React from 'react';
import TextSection from '../text-section/TextSection';
import ImageGallery from '../image-gallery/ImageGallery';
import FullSizeImageSlice from '../full-size-image-slice/FullSizeImageSlice';
import LargeImageWithQuote from '../large-image-with-quote/LargeImageWithQuote';
import TextWithFadedImageBackground from '../text-with-faded-image-background/TextWithFadedImageBackground';
import HalfImageHalfText from '../half-image-half-text/HalfImageHalfText';

export default function SliceZone({ sliceZone }) {
  return (
    <>
      {sliceZone.map((slice, index) => {
        const { slice_type: sliceType, items, primary } = slice;
        const key = `slice-${index}`;
        switch (sliceType) {
          case 'text':
            return <TextSection {...primary} key={key} />;
          case 'full_size_image':
            return <FullSizeImageSlice {...primary} key={key} />;
          case 'image_gallery':
            return <ImageGallery images={items} key={key} />;
          case 'large_image_with_small_quote':
            return <LargeImageWithQuote {...primary} key={key} />;
          case 'text_with_faded_image_background':
            return <TextWithFadedImageBackground {...primary} key={key} />;
          case 'half_image_half_text':
            return <HalfImageHalfText {...primary} key={key} />;
          default:
            return null;
        }
      })}
    </>
  );
}
