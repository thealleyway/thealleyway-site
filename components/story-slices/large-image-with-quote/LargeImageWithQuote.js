import React from 'react';
import {
  LargeImage,
  LargeImageWithQuoteWrapper,
  Quote,
} from './LargeImageWithQuote.styles';
import { getString } from '../../../lib/richText';

export default function LargeImageWithQuote({ image, quote }) {
  return (
    <LargeImageWithQuoteWrapper>
      <LargeImage src={image.url} />
      <Quote>{getString(quote)}</Quote>
    </LargeImageWithQuoteWrapper>
  );
}
