import { P } from '../../style/typography';
import styled from 'styled-components';
import { min } from '../../lib/responsive';
import { animated } from 'react-spring';

const PageDescriptionContainer = styled(animated.div)`
  display: flex;
  position: relative;
  padding: 4em 0 0 6.3em;
  @media ${min.tablet} {
    padding: 2em 0 0 0;
    margin: 0 0 0 8em;
  }
  @media ${min.desktop} {
    padding: 3em 0 0 0;
    margin: 0 0 0 11em;
  }
`;

const DescriptionContainer = styled.div`
  @media ${min.tablet} {
    margin: 0 0 0 2em;
  }
`;

const Description = styled(P)`
  width: min(90%, 18em);
  line-height: 1.8em;
  @media ${min.tablet} {
    margin: 0 0 0 1em;
    width: 17em;
    line-height: 1.8em;
  }
  @media ${min.desktop} {
    margin: 0 0 0 4em;
    width: 19em;
  }
`;

const Img = styled(animated.img)`
  opacity: 10%;
  object-fit: cover;
  position: absolute;
  top: 4em;
  right: 1.5em;
  width: 14.5em;
  height: 11.6em;

  @media ${min.tabletSm} {
    right: 0;
    width: 30em;
    height: 27em;
  }
  @media ${min.tablet} {
    top: 5em;
    width: 33em;
    height: 35em;
  }
  @media ${min.desktop} {
    top: 5em;
    width: 45.5em;
    height: 38em;
  }
`;

export { PageDescriptionContainer, DescriptionContainer, Description, Img };
