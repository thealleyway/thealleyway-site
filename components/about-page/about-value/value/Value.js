import { getString } from '../../../../lib/richText';
import { breakpointsObj } from '../../../../lib/responsive';
import { useMatchMedia } from '../../../../lib/hooks';
import { P } from '../../../../style/typography';
import {
  ValueWrapper,
  ValueImage,
  ValueTextWrapper,
  ValueTitleWrapper,
  ValueDescriptionWrapper,
} from './Value.style';
import React, { useState, useRef, useEffect } from "react";
import { registerObserver } from '../../../../lib/intersectionObserver';
import { PlaceHolder } from '../../../base-components/BaseComponents';

export default function Value({ valueData, offset }) {
  const {
    value_title: title,
    value_description: description,
    value_image: image,
  } = valueData;

  const isTabletOrMobile = useMatchMedia(
    `(max-width: ${breakpointsObj.tabletLg}px)`,
  );
  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  if (visible) {
    return (
      <ValueWrapper offset={isTabletOrMobile ? null : offset}         
                   initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 4 }} >
        <ValueImage src={image.url} alt={image.alt} />
        <ValueTextWrapper>
          <ValueTitleWrapper>{getString(title).toUpperCase()}</ValueTitleWrapper>
          <ValueDescriptionWrapper>
            <P>{getString(description)}</P>
          </ValueDescriptionWrapper>
        </ValueTextWrapper>
      </ValueWrapper>
    );
  }

  return <PlaceHolder ref={placeHolderRef} />;

}
