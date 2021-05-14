import { renderRichText } from '../../../lib/richText';
import {
  Image,
  TextWrapper,
  HalfImageHalfTextWrapper,
} from './HalfImageHalfText.styles';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';
import { motion } from 'framer-motion';

export default function HalfImageHalfText({
  arrangement,
  tablet_arrangement,
  image,
  text,
}) {
  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  return (
    <HalfImageHalfTextWrapper
      arrangement={arrangement}
      tabletArrangement={tablet_arrangement}
      ref={placeHolderRef}
    >
      {visible && (
        <Image
          src={image.url}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', duration: 4 }}
        />
      )}
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', duration: 4 }}
        >
          <TextWrapper arrangement={arrangement}>
            {renderRichText(text)}
          </TextWrapper>
        </motion.div>
      )}
    </HalfImageHalfTextWrapper>
  );
}
