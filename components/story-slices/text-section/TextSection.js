import { renderRichText } from '../../../lib/richText';
import { TextSectionWrapper } from './TextSection.styles';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';
import { PlaceHolder } from '../../base-components/BaseComponents';
import { motion } from 'framer-motion';

export default function TextSection({
  vertical_alignment,
  horizontal_alignment,
  text,
}) {
  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  if (visible) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', duration: 4, delay: 0.5 }}
      >
        <TextSectionWrapper
          verticalAlignment={vertical_alignment}
          horizontalAlignment={horizontal_alignment}
        >
          {renderRichText(text)}
        </TextSectionWrapper>
      </motion.div>
    );
  }
  return <PlaceHolder ref={placeHolderRef} />;
}
