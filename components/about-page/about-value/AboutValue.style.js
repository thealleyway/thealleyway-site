import styled from 'styled-components';
import { min, max } from '../../../lib/responsive';

const ScrollToValues = styled.div`
  position: absolute;
  margin: -6em;
`;

const OurValuesContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: 59em;
  margin-bottom: 10em;

  @media ${max.tabletLg} {
    margin-bottom: 12em;
  }

  @media ${max.tabletSm} {
    margin-top: 0;
    padding-top: 0;
    height: 76em;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex: 100%;
  justify-content: space-between;

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
  height: 59em;
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
    padding-left: 0;
    margin-left: calc(
      clamp(8em, 20vw, 12em) + clamp(2em, 4vw, 3em) + clamp(1em, 5vw, 4em)
    );
  }

  @media ${max.tablet} {
    margin: 0 auto 1em auto;
  }
`;

const ValuesContainer = styled.div`
  width: 65%;
  height: 45em;
  position: relative;
  bottom: 52em;
  margin: 0 auto;

  @media ${max.tabletLg} {
    margin-left: calc(clamp(5em, 14vw, 9em) + clamp(2em, 4vw, 3em));
  }

  @media ${max.tablet} {
    width: 100%;
    margin: 0;
  }

  @media ${max.tabletSm} {
    bottom: clamp(64em, 325vw, 67em);
  }

  @media ${max.mobile} {
    bottom: 73em;
  }
`;

const SparkArrowWrapper = styled.div`
  position: relative;
  bottom: 25.5em;
  left: clamp(10em, 18vw, 14em);

  @media ${min.desktop} {
    left: 11em;
  }
`;

export {
  ScrollToValues,
  OurValuesContainer,
  ContentWrapper,
  ValueImageRight,
  AboutValueTitleWrapper,
  ValuesContainer,
  SparkArrowWrapper,
};
