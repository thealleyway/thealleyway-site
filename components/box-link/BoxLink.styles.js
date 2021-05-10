import styled from 'styled-components';
import { P } from '../../style/typography';
import { colors } from '../../style/colors';
import { fontWeights } from '../../style/typography';
import { min } from '../../lib/responsive';
import { animated } from 'react-spring';

const BoxLinkContainer = styled.div`
  position: relative;
`;

const InnerContentContainer = styled.div`
  position: absolute;
  z-index: 2;
  padding-left: 1em;
  font-size: clamp(0.8em, 4vw, 1em);
  top: min(30%, 7em);
  @media ${min.tablet} {
    top: 8em;
  }
`;

const EllipseContainer = styled.div` 
  position: absolute
  z-index: 1;
  top: 0;
`;

const Ellipse = styled.img`
  height: clamp(18em, 90vw, 23em);
  width: clamp(18em, 90vw, 23em);
  @media ${min.tablet} {
    height: 26em;
    width: 26em;
  }
  @media ${min.desktop} {
    height: 25em;
    width: 25em;
  }
`;

const MediumArrowContainer = styled.div`
  display: none;
  &:hover {
    cursor: pointer;
  }
  @media ${min.desktop} {
    display: block;
    height: 3.8em;
    margin: 0.5em 0 0 9.7em;
    padding-bottom: 1.5em;
  }
`;

const MediumArrow = styled(animated.img)`

`;

const LongArrowContainer = styled.div`
  width: 8em;
  height: 3em;
  margin: 0 0 0 6.2em;
  @media ${min.tablet} {
    height: 4em;
    margin: 0 0 0 8em;
  }
  @media ${min.desktop} {
    display: none;
  }
`;

const LongArrow = styled(animated.img)``;

const Title = styled(P)`
  color: ${colors.BROWN};
  font-weight: ${fontWeights.medium};
  letter-spacing: 0.1em;
  margin: 0;
  padding-bottom: 0.5em;
  @media ${min.tablet} {
    padding-bottom: 1em;
  }
`;

const Description = styled(P)`
  line-height: 1.7em;
  width: 13em;
  margin: 0 0 0 4.3em;
  @media ${min.tablet} {
    margin: 0 0 0 5.6em;
  }
  @media ${min.desktop} {
    margin: 0 0 0 5.3em;
  }
`;

export {
  BoxLinkContainer,
  InnerContentContainer,
  EllipseContainer,
  Ellipse,
  Title,
  Description,
  MediumArrow,
  LongArrow,
  MediumArrowContainer,
  LongArrowContainer,
};
