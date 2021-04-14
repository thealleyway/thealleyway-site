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

export default function LongSparkArrow({ arrowText }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-hidden="true"
    >
      {!hover && (
        <ArrowContainer>
          <UnfilledSparkArrow
            src={icons.LONG_UNFILLED_SPARK_ARROW}
            alt="Unfilled long white spark arrow"
          />
          <ArrowText>{arrowText}</ArrowText>
        </ArrowContainer>
      )}
      {hover && (
        <ArrowContainerHover>
          <FilledSparkArrow
            src={icons.LONG_FILLED_SPARK_ARROW}
            alt="Filled long white spark arrow with brown arrow center"
          />
          <ArrowTextHover>{arrowText}</ArrowTextHover>
        </ArrowContainerHover>
      )}
    </div>
  );
}
