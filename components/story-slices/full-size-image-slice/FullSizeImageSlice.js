import React from 'react';
import { FullSizeImage } from './FulleSizeImageSlice.styles';

export default function FullSizeImageSlice({ image }) {
  return <FullSizeImage src={image.url} />;
}
