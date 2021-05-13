import React, { useState, useRef, useEffect } from 'react';
import { getString } from '../../lib/richText';
import { icons } from '../../style/icons';
import { colors } from '../../style/colors';
import { breakpointsObj } from '../../lib/responsive';
import { useMatchMedia } from '../../lib/hooks';
import {
  UnfilledSparkArrowTablet,
  ArrowTextTablet,
  ArrowContainerTablet,
  UnfilledSparkArrow,
  ArrowText,
  ArrowContainer,
} from './LongSparkArrow.styles';
import { registerObserver } from '../../lib/intersectionObserver';
import { PlaceHolder } from '../base-components/BaseComponents';
import { motion } from 'framer-motion';

export default function LongSparkArrow({ arrowText, scrollTo }) {
  const [hover, setHover] = useState(false);
  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  const isTabletOrMobile = useMatchMedia(
    `(max-width: ${breakpointsObj.tabletLg}px)`,
  );
  if (visible) {
    return (
      <motion.div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', duration: 4, delay: 0.5 }}
        aria-hidden="true"
      >
        {isTabletOrMobile ? (
          <ArrowContainerTablet href={`#${scrollTo}`}>
            <UnfilledSparkArrowTablet
              src={icons.LONG_UNFILLED_SPARK_ARROW}
              alt="Unfilled long white spark arrow"
            />
            <ArrowTextTablet>{getString(arrowText)}</ArrowTextTablet>
          </ArrowContainerTablet>
        ) : (
          <ArrowContainer aria-hidden="true" href={`#${scrollTo}`}>
            <UnfilledSparkArrow
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              url={icons.LONG_UNFILLED_SPARK_ARROW}
              alt="Filled long white spark arrow with brown arrow center"
              hover={hover}
              color={colors.BROWN}
            />
            <ArrowText
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              hover={hover}
            >
              {getString(arrowText)}
            </ArrowText>
          </ArrowContainer>
        )}
      </motion.div>
    );
  }
  return <PlaceHolder ref={placeHolderRef}> </PlaceHolder>;
}
