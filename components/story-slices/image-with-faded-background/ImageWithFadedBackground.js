import {
  FadedImage,
  Image,
  ImageWithFadedBackgroundWrapper,
} from './ImageWithFadedBackground.styles';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';

export default function ImageWithFadedBackground({ alignment, image }) {
  const top = alignment === 'top right' || alignment === 'top left';
  const left = alignment === 'top left' || alignment === 'bottom left';

  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  return (
    <ImageWithFadedBackgroundWrapper ref={placeHolderRef}>
      {visible && (
        <FadedImage
          src={image.url}
          top={top}
          left={left}
          initial={{ opacity: 0, x: left ? -100 : 100 }}
          animate={{ opacity: 0.1, y: 0, x: 0 }}
          transition={{ type: 'spring', duration: 7, delay: 0.2 }}
        />
      )}
      {visible && (
        <Image
          src={image.url}
          top={top}
          left={left}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 7, delay: 0.2 }}
        />
      )}
    </ImageWithFadedBackgroundWrapper>
  );
}
