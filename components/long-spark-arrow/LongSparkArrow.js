import React, { useState, useRef, useEffect } from 'react';
import { getString } from '../../lib/richText';
import { icons } from '../../style/icons';
import { colors } from '../../style/colors';
import {
  UnfilledSparkArrow,
  ArrowText,
  ArrowContainer,
} from './LongSparkArrow.styles';
import { registerObserver } from '../../lib/intersectionObserver';
import { PlaceHolder } from '../base-components/BaseComponents';
import { motion } from 'framer-motion';

export default function LongSparkArrow({ arrowText, scrollTo }) {
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
        aria-hidden="true"
      >
        <ArrowContainer aria-hidden="true" href={`#${scrollTo}`}>
          <UnfilledSparkArrow
            src={icons.LONG_UNFILLED_SPARK_ARROW}
            alt="Filled long white spark arrow with brown arrow center"
            color={colors.BROWN}
          />
          <ArrowText>{getString(arrowText)}</ArrowText>
        </ArrowContainer>
      </motion.div>
    );
  }
  return <PlaceHolder ref={placeHolderRef}> </PlaceHolder>;
}
