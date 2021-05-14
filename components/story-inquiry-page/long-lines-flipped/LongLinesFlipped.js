import { icons } from '../../../style/icons';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';
import { PlaceHolder } from '../../base-components/BaseComponents';
import {
  LongLinesFlippedDesktop,
  LongLinesFlippedTablet,
} from './LongLinesFlipped.styles';

export default function LongLinesFlipped() {
  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  if (visible) {
    return (
      <>
        <LongLinesFlippedDesktop
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 4, delay: 4 }}
          src={icons.LONG_LINES_FLIPPED_DESKTOP}
          alt="long lines with spark at the end flipped for desktop"
        />
        <LongLinesFlippedTablet
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 4 }}
          src={icons.LONG_LINES_FLIPPED_TABLET}
          alt="long lines with spark at the end flipped for tablet"
        />
      </>
    );
  }
  return <PlaceHolder ref={placeHolderRef}> </PlaceHolder>;
}
