import { P } from '../../style/typography';
import styled, { css } from 'styled-components';
import { colors } from '../../style/colors';
import { min, max } from '../../lib/responsive';
import {
  HoverAnimationButton,
  TopBottomAnimation,
} from '../animation-base-components/AnimationBaseComponents';

const SparkArrowGeneral = `
  position: absolute;
  transform: rotate(90deg);
  z-index: 1;
`;

const ArrowTextGeneral = `
  position: absolute;
  z-index: 2;
  text-align: right;
  letter-spacing: 0.13em;
  color: ${colors.BROWN};
`;

const ArrowContainerGeneral = `
  position: absolute;
  transform: rotate(270deg);
  border: none;
`;

const UnfilledSparkArrow = styled(HoverAnimationButton)`
  ${SparkArrowGeneral};
  top: -5.6em;
  height: 27em;
  width: 3.75em;
  cursor: pointer;
  background: ${(props) => `url('${props.url}') no-repeat` || 'none'};
  background-position: 0 0%;
  background-size: 85%;
  padding-bottom: 1em;
  border: none;
  overflow: visible;

  @media ${max.tabletLg} {
    visibility: hidden;
  }

  @media ${min.desktop} {
    top: 4.2em;
    height: 25em;
  }

  ${(props) =>
    props.hover
      ? css`
          animation: ${TopBottomAnimation} 0.8s forwards;
        `
      : ''};
`;

const UnfilledSparkArrowTablet = styled.img`
  ${SparkArrowGeneral};
  top: -6.7em;
  right: 7.25em;
  height: 17em;

  @media ${min.tablet} {
    top: -2.4em;
    right: 7.5em;
    height: 17em;
  }
  @media ${min.tabletLg} {
    visibility: hidden;
  }
`;

const ArrowText = styled(P)`
  ${ArrowTextGeneral}
  right: -12.8em;
  width: 20em;
  padding-top: 0.8em;
  padding-top: 4.5em;

  @media ${min.desktop} {
    padding-right: 0.9em;
    padding-top: 11.9em;
  }
`;

const ArrowTextTablet = styled(P)`
  ${ArrowTextGeneral}
  right: 0;
  width: 20em;

  @media ${min.tablet} {
    padding-top: 4.3em;
  }

  @media ${min.tabletLg} {
    visibility: hidden;
  }
`;

const ArrowContainer = styled(HoverAnimationButton).attrs({
  as: 'a',
})`
  ${ArrowContainerGeneral}
  top: 12.6em;
  left: 2em;

  @media ${min.tablet} {
    top: 16.2em;
    left: -6em;
  }

  @media ${min.desktop} {
    top: 16.25em;
    left: -10em;
  }
`;

const ArrowContainerTablet = styled(HoverAnimationButton).attrs({
  as: 'a',
})`
  ${ArrowContainerGeneral}
  top: 5.5em;
  left: 1.5em;

  @media ${min.tablet} {
    top: 3.4em;
    left: -6em;
  }
`;

export {
  UnfilledSparkArrowTablet,
  ArrowTextTablet,
  ArrowContainerTablet,
  UnfilledSparkArrow,
  ArrowText,
  ArrowContainer,
};
