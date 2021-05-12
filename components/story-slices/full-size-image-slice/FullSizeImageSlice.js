import React from 'react';
import { FullSizeImage } from './FullSizeImageSlice.styles';

export default function FullSizeImageSlice({ image }) {
  return <FullSizeImage src={image.url} />;
}
