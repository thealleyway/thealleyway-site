import {
  Button,
  ButtonText,
  UnfilledButtonImage,
  FilledButtonImage,
} from './BackToStartVerticalButton.styles';
import { icons } from '../../style/icons';
import React, { useState } from 'react';
import { breakpointsObj } from '../../lib/responsive';
import MediaQuery from 'react-responsive';

export default function BackToStartVerticalButton({ onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <Button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onClick}
    >
      <MediaQuery minDeviceWidth={breakpointsObj.desktop}>
        {!hover && (
          <UnfilledButtonImage
            src={icons.UNFILLED_BACK_TO_TOP}
            alt="Brown unfilled back to top arrow"
          />
        )}
        {hover && (
          <FilledButtonImage
            src={icons.FILLED_BACK_TO_TOP}
            alt="Brown filled back to top arrow"
          />
        )}
      </MediaQuery>
      <MediaQuery maxDeviceWidth={breakpointsObj.desktop - 1}>
        <FilledButtonImage
          src={icons.FILLED_BACK_TO_TOP}
          alt="Brown unfilled back to top arrow"
        />
      </MediaQuery>
      <ButtonText>BACK TO START</ButtonText>
    </Button>
  );
}
