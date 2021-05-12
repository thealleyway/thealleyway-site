import React from 'react';
import { Image, TwoImagesWrapper } from './TwoImages.styles';

export default function FullSizeImageSlice({ image1, image2 }) {
  return (
    <TwoImagesWrapper>
      <Image src={image1.url} />
      <Image src={image2.url} />
    </TwoImagesWrapper>
  );
}
