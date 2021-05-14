import {
  FadedImage1,
  FadedImage2,
  GalleryImage1,
  GalleryImage2,
  GalleryImage3,
  GalleryWrapper,
} from '../image-gallery/ImageGallery.styles';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';

const PREVIEW_CHANGE_IN_MILLISECONDS = 4000;

export default function ImageGallery({ images }) {
  const [firstActiveIndex, setFirstActiveIndex] = useState(0);
  const [fadeInImages, setFadeInImages] = useState(true);
  const getNextIndex = (index) => (index + 1) % images.length;

  useEffect(() => {
    var fadeIn;
    var fadeOut;
    const id = setTimeout(() => {
      fadeIn = setTimeout(() => {
        setFadeInImages(true);
        setFirstActiveIndex(getNextIndex(firstActiveIndex));
      }, PREVIEW_CHANGE_IN_MILLISECONDS);
      fadeOut = setTimeout(() => {
        setFadeInImages(false);
      }, PREVIEW_CHANGE_IN_MILLISECONDS / 2);
    }, PREVIEW_CHANGE_IN_MILLISECONDS);
    return () => {
      clearTimeout(id);
      clearTimeout(fadeIn);
      clearTimeout(fadeOut);
    };
  }, [firstActiveIndex]);

  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

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
    <GalleryWrapper ref={placeHolderRef}>
      <GalleryImage1
        src={currentImages[0].gallery_image.url}
        alt={currentImages[0].gallery_image.alt}
        fadeIn={fadeInImages}
      />
      <GalleryImage2
        src={currentImages[1].gallery_image.url}
        alt={currentImages[1].gallery_image.alt}
        fadeIn={fadeInImages}
      />
      <GalleryImage3
        src={currentImages[2].gallery_image.url}
        alt={currentImages[2].gallery_image.alt}
        fadeIn={fadeInImages}
      />
      {visible && (
        <FadedImage1
          src={currentImages[0].gallery_image.url}
          alt={currentImages[0].gallery_image.alt}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ type: 'spring', duration: 4 }}
        />
      )}
      {visible && (
        <FadedImage2
          src={currentImages[1].gallery_image.url}
          alt={currentImages[1].gallery_image.alt}
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ type: 'spring', duration: 4 }}
        />
      )}
    </GalleryWrapper>
  );
}
