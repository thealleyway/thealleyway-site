import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';
import { FullSizeImage, ImageWrapper } from './FullSizeImageSlice.styles';
import { useMatchMedia } from '../../../lib/hooks';
import { breakpointsObj } from '../../../lib/responsive';

export default function FullSizeImageSlice({ image }) {
  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  const isTabletOrMobile = useMatchMedia(
    `(max-width: ${breakpointsObj.tabletLg}px)`,
  );

  return !isTabletOrMobile ? (
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
  ) : (
    <FullSizeImage src={image.url} ref={placeHolderRef} />
  );
}
