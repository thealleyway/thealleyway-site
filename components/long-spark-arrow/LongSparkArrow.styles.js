import { P } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import { min } from '../../lib/responsive';
import { HoverAnimationButton } from '../animation-base-components/AnimationBaseComponents';

const UnfilledSparkArrow = styled.img`
  position: absolute;
  transform: rotate(90deg);
  z-index: 1;
  top: -6.7em;
  right: 7.25em;
  height: 18em;

  @media ${min.tablet} {
    top: -6.9em;
    right: 8em;
    height: 19em;
  }

  cursor: pointer;

  @media ${min.desktop} {
    top: 2.1em;
    right: 8em;
    height: 19em;
  }
`;

const ArrowText = styled(P)`
  position: absolute;
  z-index: 2;
  text-align: right;
  right: 0;
  letter-spacing: 0.13em;
  color: ${colors.BROWN};

  width: 20em;
  padding-right: 0;
  padding-top: 0.5em;
  @media ${min.tablet} {
    padding-top: 0.8em;
  }

  @media ${min.desktop} {
    padding-top: 9.7em;
  }
`;

const ArrowContainer = styled(HoverAnimationButton).attrs({
  as: 'a',
})`
  position: absolute;
  transform: rotate(270deg);
  border: none;
  position: absolute;
  top: 5.5em;
  left: 1.5em;

  @media ${min.tablet} {
    top: 3.5em;
    left: -2.5em;
  }

  @media ${min.desktop} {
    top: 4.5em;
    left: -8.5em;
  }

  &:hover {
    cursor: pointer;
  }
`;

export { UnfilledSparkArrow, ArrowText, ArrowContainer };
