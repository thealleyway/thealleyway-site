import React from 'react';
import FullSizeImageSlice from '../full-size-image-slice/FullSizeImageSlice';
import HalfImageHalfText from '../half-image-half-text/HalfImageHalfText';
import ImageGallery from '../image-gallery/ImageGallery';
import LargeImageWithQuote from '../large-image-with-quote/LargeImageWithQuote';
import TextSection from '../text-section/TextSection';
import TextWithFadedImageBackground from '../text-with-faded-image-background/TextWithFadedImageBackground';
import ImageWithFadedBackground from '../image-with-faded-background/ImageWithFadedBackground';
import TwoImages from '../two-images/TwoImages';

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
          case 'image_with_faded_background':
            return <ImageWithFadedBackground {...primary} key={key} />;
          case 'two_images':
            return <TwoImages {...primary} key={key} />;
          default:
            return null;
        }
      })}
    </>
  );
}
