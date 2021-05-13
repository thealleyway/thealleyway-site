import {
  UnfilledSparkArrow,
  ArrowText,
  ArrowContainer,
  ArrowContainerHover,
  FilledSparkArrow,
  ArrowTextHover,
} from './LongSparkArrow.styles';
import { getString } from '../../lib/richText';
import { icons } from '../../style/icons';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../lib/intersectionObserver';
import { PlaceHolder } from '../base-components/BaseComponents';
import { motion } from 'framer-motion';

export default function LongSparkArrow({ arrowText, scrollTo, pageDescription }) {
  const [hover, setHover] = useState(false);
  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  if (visible) {
    return (
      <motion.div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', duration: 4, delay: pageDescription ? 3 : 0.5 }}
        aria-hidden="true"
      >
        {!hover && (
          <ArrowContainer>
            <UnfilledSparkArrow
              src={icons.LONG_UNFILLED_SPARK_ARROW}
              alt="Unfilled long white spark arrow"
            />
            <ArrowText>{getString(arrowText)}</ArrowText>
          </ArrowContainer>
        )}
        {hover && (
          <ArrowContainerHover href={`#${scrollTo}`}>
            <FilledSparkArrow
              src={icons.LONG_FILLED_SPARK_ARROW}
              alt="Filled long white spark arrow with brown arrow center"
            />
            <ArrowTextHover>{getString(arrowText)}</ArrowTextHover>
          </ArrowContainerHover>
        )}
      </motion.div>
    );
  }
  return <PlaceHolder ref={placeHolderRef}> </PlaceHolder>;
}
