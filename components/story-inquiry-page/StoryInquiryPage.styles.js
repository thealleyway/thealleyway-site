import styled from 'styled-components';
import { min } from '../../lib/responsive';

const LongLinesDesktop = styled.img`
  display: none;
  @media ${min.desktop} {
    display: block;
    position: relative;
    width: 11.2em;
    margin: 0 0 0 5.8em;
  }
`;

const LongLinesFlippedDesktop = styled.img`
display: none;
@media ${min.desktop} {
  display: block;
  position: relative;
  width: 11.2em;
  margin: -32em 0 0 4.8em;
}
}
`;

const LongLinesTablet = styled.img`
  @media ${min.tablet} {
    display: block;
    position: relative;
    width: 7em;
    margin: 0 0 0 0.9em;
  }
  @media ${min.desktop} {
    display: none;
  }
`;

const LongLinesFlippedTablet = styled.img`
  @media ${min.tablet} {
    display: block;
    position: relative;
    width: 7em;
    margin: -27em 0 0 0.3em;
  }
  @media ${min.desktop} {
    display: none;
  }
`;

const LongLinesContainer = styled.div`
  position: absolute;
  display: none;
  @media ${min.tablet} {
    display: block;
    margin: 30em 0 0 0;
  }
  @media ${min.desktop} {
    margin: 32.5em 0 0 0;
  }
`;

const TopSparkArrowContainer = styled.div`
  position: absolute;
  display: none;
  @media ${min.tablet} {
    display: block;
    margin: 4.5em 0 0 7.8em;
  }
  @media ${min.desktop} {
    margin: 2em 0 0 10.9em;
  }
`;

const BottomSparkArrowContainer = styled.div`
  position: absolute;
  display: none;
  @media ${min.desktop} {
    display: block;
    margin: -25.3em 0 0 10.9em;
  }
`;

const SquiggleWavy = styled.img`
  position: absolute;
  width: 8.7em;
  margin: -3em 0 0 4em;
  @media ${min.tablet} {
    width: 16em;
    margin: -9em 0 0 8em;
  }
  @media ${min.desktop} {
    width: 17.5em;
    margin: 1em 0 0 17em;
  }
`;

const H1StyledContainer = styled.div`
  @media ${min.tablet} {
    padding-bottom: 0.5em;
  }
  @media ${min.desktop} {
    padding-bottom: 2.5em;
  }
`;

const SideImageContainer = styled.div`
  position: absolute;
  right: 0;
  opacity: 10%;
  display: none;

  @media ${min.tablet} {
    display: flex;
    flex-direction: column;
    margin-top: 7.5em;
  }
  @media ${min.desktop} {
    margin-top: 10em;
  }
`;

const SideImage = styled.img`
  object-fit: cover;
  display: none;
  @media ${min.tablet} {
    margin-bottom: 20em;
    width: 8.5em;
    height: 32em;
  }
  @media ${min.desktop} {
    margin-bottom: 15em;
    width: 16em;
    height: 32em;
  }
`;

const QuoteCarouselContainer = styled.div`
  @media ${min.tabletSm} {
    margin-left: 0.7em;
  }
  @media ${min.tablet} {
    margin-left: 1em;
  }
  @media ${min.desktop} {
    margin: 10em 0 0 6em;
  }
`;

export {
  SquiggleWavy,
  H1StyledContainer,
  LongLinesDesktop,
  LongLinesFlippedDesktop,
  LongLinesContainer,
  TopSparkArrowContainer,
  BottomSparkArrowContainer,
  SideImage,
  SideImageContainer,
  QuoteCarouselContainer,
  LongLinesTablet,
  LongLinesFlippedTablet,
};
