import React from 'react';
import {
  Image,
  Text,
  TextWithFadedImageBackgroundWrapper,
} from './TextWithFadedImageBackground.styles';
import { getString } from '../../../lib/richText';

export default function TextWithFadedImageBackground({
  background_image,
  text,
  image_right,
}) {
  return (
    <TextWithFadedImageBackgroundWrapper imageRight={image_right}>
      <Image src={background_image.url} imageRight={image_right} />
      <Text imageRight={image_right}>{getString(text)}</Text>
    </TextWithFadedImageBackgroundWrapper>
  );
}
