import React, { useState, useEffect, useMemo } from 'react';
import {
  FadedImage1,
  FadedImage2,
  GalleryImage1,
  GalleryImage2,
  GalleryImage3,
  GalleryWrapper,
} from '../image-gallery/ImageGallery.styles';

const PREVIEW_CHANGE_IN_MILLISECONDS = 4000;

export default function ImageGallery({ images }) {
  const [firstActiveIndex, setFirstActiveIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const getNextIndex = (index) => (index + 1) % images.length;

  useEffect(() => {
    var fadeIn;
    var fadeOut;
    const id = setTimeout(() => {
      fadeIn = setTimeout(() => {
        setFadeIn(true);
        setFirstActiveIndex(getNextIndex(firstActiveIndex));
      }, PREVIEW_CHANGE_IN_MILLISECONDS);
      fadeOut = setTimeout(() => {
        setFadeIn(false);
      }, PREVIEW_CHANGE_IN_MILLISECONDS / 2);
    }, PREVIEW_CHANGE_IN_MILLISECONDS);
    return () => {
      clearTimeout(id);
      clearTimeout(fadeIn);
      clearTimeout(fadeOut);
    };
  }, [firstActiveIndex]);

  const currentImages = useMemo(() => {
    const index1 = firstActiveIndex;
    const index2 = getNextIndex(firstActiveIndex);
    const index3 = getNextIndex(index2);

    return [
      images[Number.parseInt(index1)],
      images[Number.parseInt(index2)],
      images[Number.parseInt(index3)],
    ];
  }, [firstActiveIndex, images]);

  return (
    <GalleryWrapper>
      <GalleryImage1
        src={currentImages[0].gallery_image.url}
        alt={currentImages[0].gallery_image.alt}
        fadeIn={fadeIn}
      />
      <GalleryImage2
        src={currentImages[1].gallery_image.url}
        alt={currentImages[1].gallery_image.alt}
        fadeIn={fadeIn}
      />
      <GalleryImage3
        src={currentImages[2].gallery_image.url}
        alt={currentImages[2].gallery_image.alt}
        fadeIn={fadeIn}
      />
      <FadedImage1
        src={currentImages[0].gallery_image.url}
        alt={currentImages[0].gallery_image.alt}
      />
      <FadedImage2
        src={currentImages[1].gallery_image.url}
        alt={currentImages[1].gallery_image.alt}
      />
    </GalleryWrapper>
  );
}
