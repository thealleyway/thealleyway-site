import { Image, TwoImagesWrapper } from './TwoImages.styles';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';

export default function FullSizeImageSlice({ image1, image2 }) {
  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);
  return (
    <TwoImagesWrapper ref={placeHolderRef}>
      {visible && (
        <Image
          src={image1.url}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 4, delay: 0.2 }}
        />
      )}
      {visible && (
        <Image
          src={image2.url}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 4, delay: 0.2 }}
        />
      )}
    </TwoImagesWrapper>
  );
}
