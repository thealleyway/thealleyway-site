import styled from 'styled-components';
import { min } from '../../lib/responsive';
import { animated } from 'react-spring';

const HeaderandSquiggleContainer = styled(animated.div)`
  z-index: 50;
  position: relative;
  margin-left: -1.5em;
  @media ${min.tablet} {
    padding-bottom: 1.5em;
  }
  @media ${min.desktop} {
    padding-bottom: 2em;
  }
`;

const SquiggleUnderline = styled.img`
  position: absolute;
  width: clamp(9em, 44vw, 10em);
  margin-top: 2em;
  margin-left: clamp(2.75em, 18vw, 4.5em);
  padding: 0 1.5em 0 2em;

  @media ${min.tablet} {
    width: 14em;
    margin: -1em 0 0 8em;
  }
  @media ${min.desktop} {
    width: 13em;
    margin: 0.5em 0 0 11em;
  }
`;

export { HeaderandSquiggleContainer, SquiggleUnderline };
