import { getString } from '../../../../lib/richText';
import { AboutValueTitleWrapper } from '../AboutValue.style';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../../lib/intersectionObserver';
import { PlaceHolder } from '../../../base-components/BaseComponents';
import { H2Wrapper } from '../../about-founder/AboutFounder.style';

export default function ValuesTitle({ valuesTitle }) {
  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  if (visible) {
    return (
      <AboutValueTitleWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', duration: 4 }}
      >
        <H2Wrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 4 }}
        >
          {getString(valuesTitle)}
        </H2Wrapper>
      </AboutValueTitleWrapper>
    );
  }
  return <PlaceHolder ref={placeHolderRef} />;
}
