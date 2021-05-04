import { Button, ButtonText, ButtonImage } from './BackToStartButton.styles';
import { icons } from '../../style/icons';
import React, { useState } from 'react';
import { breakpointsObj } from '../../lib/responsive';
import { useMatchMedia } from '../../lib/hooks';

export default function BackToStartVerticalButton(props) {
  const [hover, setHover] = useState(false);
  const isTabletOrMobile = useMatchMedia(
    `(max-width: ${breakpointsObj.tabletLg}px)`,
  );

  return (
    <Button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => window.scrollTo(0, 0)}
      {...props}
    >
      <ButtonImage
        src={
          hover || isTabletOrMobile
            ? icons.FILLED_BACK_TO_TOP
            : icons.UNFILLED_BACK_TO_TOP
        }
        alt="Brown unfilled back to top arrow"
        {...props}
      />
      <ButtonText {...props}>BACK TO START</ButtonText>
    </Button>
  );
}
