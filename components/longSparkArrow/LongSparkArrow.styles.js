import { P } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import { fontWeights } from '../../style/typography';
import { min } from '../../lib/responsive';

const UnfilledSparkArrow = styled.img`
  position: absolute;
  transform: rotate(90deg);
  z-index: 1;
  @media ${min.mobile} {
    top: -4.8em;
    right: 6.5em;
    height: 13em;
  }
  @media ${min.tablet} {
    top: -1.5em;
    right: 7.3em;
    height: 15em;
  }
  @media ${min.desktop} {
    top: 2.5em;
    right: 7em;
    height: 14em;
  }
`;

const FilledSparkArrow = styled.img`
  position: absolute;
  transform: rotate(90deg);
  z-index: 1;
  @media ${min.desktop} {
    top: 2.1em;
    right: 8em;
    height: 19em;
  }
`;

const ArrowTextHover = styled(P)`
  position: absolute;
  z-index: 2;
  right: 0;
  text-align: right;
  color: ${colors.BROWN};
  font-weight: ${fontWeights.bold};
  @media ${min.desktop} {
    padding-top: 9.8em;
    width: 20em;
  }
`;

const ArrowText = styled(P)`
  position: absolute;
  z-index: 2;
  right: 0;
  text-align: right;
  color: ${colors.BROWN};
  width: 20em;
  @media ${min.mobile} {
    padding-right: 1.4em;
  }
  @media ${min.tablet} {
    padding-top: 4.2em;
  }
  @media ${min.desktop} {
    padding-top: 7.8em;
  }
`;

const ArrowContainerHover = styled.div`
  position: absolute;
  transform: rotate(270deg);
  @media ${min.mobile} {
    left: -15em;
  }
  @media ${min.tablet} {
    left: -10em;
  }
  @media ${min.desktop} {
    left: -9.5em;
  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  transform: rotate(270deg);
  @media ${min.mobile} {
    left: 1.5em;
  }
  @media ${min.tablet} {
    top: 1em;
    left: -8.5em;
  }
  @media ${min.desktop} {
    top: 2em;
    left: -7.5em;
  }
`;

export {
  UnfilledSparkArrow,
  ArrowText,
  ArrowContainer,
  ArrowTextHover,
  FilledSparkArrow,
  ArrowContainerHover,
};
