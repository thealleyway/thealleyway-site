import {
  Button,
  ButtonText,
  ButtonImage,
} from './BackToStartVerticalButton.styles';
import { icons } from '../../style/icons';
import React, { useState } from 'react';
import { breakpointsObj } from '../../lib/responsive';
import MediaQuery from 'react-responsive';

export default function BackToStartVerticalButton() {
  const [hover, setHover] = useState(false);

  return (
    <Button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href="#top"
    >
      <MediaQuery minDeviceWidth={breakpointsObj.tabletLg}>
        <ButtonImage
          src={hover ? icons.FILLED_BACK_TO_TOP : icons.UNFILLED_BACK_TO_TOP}
          alt="Brown unfilled back to top arrow"
        />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={breakpointsObj.tabletLg - 1}>
        <ButtonImage
          src={icons.FILLED_BACK_TO_TOP}
          alt="Brown unfilled back to top arrow"
        />
      </MediaQuery>
      <ButtonText>BACK TO START</ButtonText>
    </Button>
  );
}
