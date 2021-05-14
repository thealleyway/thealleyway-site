import {
  LargeImage,
  LargeImageWithQuoteWrapper,
  Quote,
} from './LargeImageWithQuote.styles';
import { getString } from '../../../lib/richText';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';

export default function LargeImageWithQuote({ image, quote }) {
  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  return (
    <LargeImageWithQuoteWrapper ref={placeHolderRef}>
      {visible && (
        <LargeImage
          src={image.url}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 10, delay: 0.2 }}
        />
      )}
      {visible && (
        <Quote
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', duration: 4, delay: 0.5 }}
        >
          {getString(quote)}
        </Quote>
      )}
    </LargeImageWithQuoteWrapper>
  );
}
