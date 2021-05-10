import React from 'react';
import { renderRichText } from '../../../lib/richText';
import { P } from '../../../style/typography';
import { TextSectionWrapper } from './TextSection.styles';

export default function TextSection({
  vertical_alignment,
  horizontal_alignment,
  text,
}) {
  return (
    <TextSectionWrapper
      verticalAlignment={vertical_alignment}
      horizontalAlignment={horizontal_alignment}
    >
      <P>{renderRichText(text)}</P>
    </TextSectionWrapper>
  );
}
