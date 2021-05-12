import React from 'react';
import {
  FadedImage,
  Image,
  ImageWithFadedBackgroundWrapper,
} from './ImageWithFadedBackground.styles';

export default function ImageWithFadedBackground({ alignment, image }) {
  const top = alignment === 'top right' || alignment === 'top left';
  const left = alignment === 'top left' || alignment === 'bottom left';
  return (
    <ImageWithFadedBackgroundWrapper>
      <FadedImage src={image.url} top={top} left={left} />
      <Image src={image.url} top={top} left={left} />
    </ImageWithFadedBackgroundWrapper>
  );
}
