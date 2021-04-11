import {
  UnfilledSparkArrow,
  ArrowText,
  ArrowContainer,
  ArrowContainerHover,
  FilledSparkArrow,
  ArrowTextHover,
} from './LongSparkArrow.styles';
import { icons } from '../../style/icons';
import React, { useState } from 'react';

export default function LongSparkArrow({ arrowText, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onClick}
    >
      {!hover && (
        <ArrowContainer>
          <UnfilledSparkArrow src={icons.LONG_UNFILLED_SPARK_ARROW} />
          <ArrowText>{arrowText}</ArrowText>
        </ArrowContainer>
      )}
      {hover && (
        <ArrowContainerHover>
          <FilledSparkArrow src={icons.LONG_FILLED_SPARK_ARROW} />
          <ArrowTextHover>{arrowText}</ArrowTextHover>
        </ArrowContainerHover>
      )}
    </div>
  );
}
