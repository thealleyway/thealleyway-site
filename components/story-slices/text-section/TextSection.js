import React from 'react';
import { renderRichText } from '../../../lib/richText';
import { P } from '../../../style/typography';
import { TextSectionWrapper } from './TextSection.styles';

export default function TextSection({ alignment, text }) {
  return (
    <TextSectionWrapper alignment={alignment}>
      <P>{renderRichText(text)}</P>
    </TextSectionWrapper>
  );
}
