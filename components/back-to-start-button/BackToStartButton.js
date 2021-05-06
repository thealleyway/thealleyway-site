import { Button, ButtonText, ButtonImage } from './BackToStartButton.styles';
import { icons } from '../../style/icons';
import React, { useState } from 'react';
import { breakpointsObj } from '../../lib/responsive';
import { useMatchMedia } from '../../lib/hooks';

export default function BackToStartButton(props) {
  const [hover, setHover] = useState(false);
  const isTabletOrMobile = useMatchMedia(
    `(max-width: ${breakpointsObj.tabletLg}px)`,
  );

  return (
    <Button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
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
