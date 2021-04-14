import { P } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import { fontWeights } from '../../style/typography';
import { min } from '../../lib/responsive';

const SparkArrowGeneral = `
position: absolute;
transform: rotate(90deg);
z-index: 1;
`;

const ArrowTextGeneral = `
position: absolute;
z-index: 2;
right: 0;
text-align: right;
color: ${colors.BROWN};
`;

const UnfilledSparkArrow = styled.img`
  ${SparkArrowGeneral};
  @media ${min.mobile} {
    top: -4.8em;
    right: 6.5em;
    height: 13em;
  }
  @media ${min.tablet} {
    top: -1.5em;
    right: 6em;
    height: 15em;
  }
  @media ${min.desktop} {
    top: 2.5em;
    right: 5.5em;
    height: 14em;
  }
`;

const FilledSparkArrow = styled.img`
  ${SparkArrowGeneral};
  @media ${min.mobile} {
    top: -4.8em;
    right: 6.5em;
    height: 13em;
  }
  @media ${min.tablet} {
    top: -6.9em;
    right: 8em;
    height: 19em;
  }
  @media ${min.desktop} {
    top: 2.1em;
    right: 8em;
    height: 19em;
  }
`;

const ArrowTextHover = styled(P)`
  ${ArrowTextGeneral};
  font-weight: ${fontWeights.bold};
  width: 20em;
  @media ${min.mobile} {
    padding-right: 0;
  }
  @media ${min.tablet} {
    padding-top: .8em;
  }
  @media ${min.desktop} {
    padding-top: 9.8em;

  }
`;

const ArrowText = styled(P)`
  ${ArrowTextGeneral};
  width: 20em;
  @media ${min.tablet} {
    padding-top: 4.3em;
  }
  @media ${min.desktop} {
    padding-top: 7.8em;
  }
`;

const ArrowContainerHover = styled.div`
  position: absolute;
  transform: rotate(270deg);
  @media ${min.mobile} {
    // left: -15em;
  }
  @media ${min.tablet} {
    left: -5em;
  }
  @media ${min.desktop} {
    top: 3.5em;
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
    top: 2.5em;
    left: -8.5em;
  }
  @media ${min.desktop} {
    top: 3.5em;
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
