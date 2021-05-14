import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';
import { FullSizeImage, ImageWrapper } from './FullSizeImageSlice.styles';

export default function FullSizeImageSlice({ image }) {
  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  return (
    <ImageWrapper ref={placeHolderRef}>
      {visible && (
        <FullSizeImage
          src={image.url}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 5, delay: 0.2 }}
        />
      )}
    </ImageWrapper>
  );
}
