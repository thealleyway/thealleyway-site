import { Image, TwoImagesWrapper } from './TwoImages.styles';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';
import { useMatchMedia } from '../../../lib/hooks';
import { breakpointsObj } from '../../../lib/responsive';

export default function FullSizeImageSlice({ image1, image2 }) {
  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  const isTabletOrMobile = useMatchMedia(
    `(max-width: ${breakpointsObj.tabletLg}px)`,
  );

  return !isTabletOrMobile ? (
    <TwoImagesWrapper ref={placeHolderRef}>
      {visible && (
        <Image
          src={image1.url}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 4, delay: 0.2 }}
        />
      )}
      {visible && (
        <Image
          src={image2.url}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 4, delay: 0.2 }}
        />
      )}
    </TwoImagesWrapper>
  ) : (
    <TwoImagesWrapper>
      <Image src={image1.url} />
      <Image src={image2.url} />
    </TwoImagesWrapper>
  );
}
