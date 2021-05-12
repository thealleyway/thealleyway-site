import React from 'react';
import { renderRichText } from '../../../lib/richText';
import {
  Image,
  TextWrapper,
  HalfImageHalfTextWrapper,
} from './HalfImageHalfText.styles';

export default function HalfImageHalfText({
  arrangement,
  tablet_arrangement,
  image,
  text,
}) {
  return (
    <HalfImageHalfTextWrapper
      arrangement={arrangement}
      tabletArrangement={tablet_arrangement}
    >
      <Image src={image.url} />
      <TextWrapper arrangement={arrangement}>
        {renderRichText(text)}
      </TextWrapper>
    </HalfImageHalfTextWrapper>
  );
}
