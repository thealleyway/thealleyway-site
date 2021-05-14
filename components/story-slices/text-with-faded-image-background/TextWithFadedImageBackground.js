import {
  Image,
  Text,
  TextWithFadedImageBackgroundWrapper,
} from './TextWithFadedImageBackground.styles';
import { getString } from '../../../lib/richText';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';

export default function TextWithFadedImageBackground({
  background_image,
  text,
  image_right,
}) {
  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  return (
    <TextWithFadedImageBackgroundWrapper
      imageRight={image_right}
      ref={placeHolderRef}
    >
      {' '}
      {visible && (
        <Image
          src={background_image.url}
          imageRight={image_right}
          initial={{ opacity: 0.3, x: image_right ? -100 : 100 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ type: 'spring', duration: 5, delay: 0.2 }}
        />
      )}
      <Text
        imageRight={image_right}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', duration: 4, delay: 0.2 }}
      >
        {getString(text)}
      </Text>{' '}
      {/* )} */}
    </TextWithFadedImageBackgroundWrapper>
  );
}
