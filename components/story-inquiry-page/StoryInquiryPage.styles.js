import styled from 'styled-components';
import { min } from '../../lib/responsive';
import { motion } from 'framer-motion';

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

const QuoteCarouselContainer = styled.div`
  margin: 0 0 -12em 0;
  padding-top: 3em;
  @media ${min.tabletSm} {
    margin-left: 0.7em;
  }
  @media ${min.tablet} {
    padding-top: 3em;
    margin: 0 0 -8em 1em;
  }
  @media ${min.desktop} {
    margin: 4.5em 0 0 6em;
  }
`;

const ScrollToAuthorTestimonies = styled.div`
  position: absolute;
  margin: -1em;
`;

const LongLinesContainer = styled(motion.div)`
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

export {
  SquiggleWavy,
  H1StyledContainer,
  TopSparkArrowContainer,
  BottomSparkArrowContainer,
  SideImageContainer,
  LongLinesContainer,
  QuoteCarouselContainer,
  ScrollToAuthorTestimonies,
};
