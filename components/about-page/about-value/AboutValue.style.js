import styled from 'styled-components';
import { min, max } from '../../../lib/responsive';

const OurValuesContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: 59em;
  @media ${min.tabletLg} {
    padding-top: 5em;
  }

  @media ${max.tabletSm} {
    margin-top: 4em;
    height: 72em;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex: 100%;

  @media ${min.desktop} {
    justify-content: space-between;
  }

  @media ${max.desktop} {
    justify-content: flex-end;
  }

  @media ${max.tabletLg} {
    justify-content: flex-start;
  }

  @media ${max.tablet} {
    justify-content: flex-end;
  }
`;

const ValueImageRight = styled.img`
  height: 50em;
  width: clamp(30em, 45vw, 40em);
  opacity: 10%;
  object-fit: cover;

  @media ${max.tabletLg} {
    order: -1;
    width: clamp(5em, 14vw, 9em);
  }

  @media ${max.tablet} {
    order: 1;
    width: clamp(10em, 30vw, 20em);
  }

  @media ${max.tabletSm} {
    width: clamp(5em, 30vw, 10em);
    height: 70em;
  }
  @media ${max.mobile} {
    height: 76em;
  }

  @media ${min.desktop} {
    width: 45%;
  }
`;

const AboutValueTitleWrapper = styled.div`
  padding-right: 2em;
  padding-left: clamp(10em, 18vw, 30em);

  @media ${max.desktop} {
    padding-right: 2em;
  }

  @media ${max.tabletLg} {
    margin-left: clamp(2em, 4vw, 3em);
  }

  @media ${max.tablet} {
    margin: 0 auto 1em auto;
  }
`;

const ValuesContainer = styled.div`
  width: 65%;
  height: 45em;
  position: relative;
  bottom: 45em;
  margin: 0 auto;

  @media ${max.tabletLg} {
    margin-left: calc(clamp(5em, 14vw, 9em) + clamp(2em, 4vw, 3em));
  }

  @media ${max.tablet} {
    width: 100%;
    margin: 0;
  }

  @media ${max.tabletSm} {
    bottom: clamp(63em, 320vw, 64em);
  }

  @media ${max.mobile} {
    bottom: 71em;
  }
`;

const SparkArrowWrapper = styled.div`
  position: relative;
  bottom: 18em;
  left: clamp(12em, 20.75vw, 17em);

  @media ${min.desktop} {
    left: 14em;
  }
`;

export {
  OurValuesContainer,
  ContentWrapper,
  ValueImageRight,
  AboutValueTitleWrapper,
  ValuesContainer,
  SparkArrowWrapper,
};
