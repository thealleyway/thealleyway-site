import styled from 'styled-components';
import { min } from '../../lib/responsive';
import { motion } from 'framer-motion';
import { animated } from 'react-spring';

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

const H1StyledContainer = styled(animated.div)`
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
  margin: 7em 0 -10em 0;
  @media ${min.tabletSm} {
    margin: 3em 0 -8em 0.7em;
  }
  @media ${min.tablet} {
    margin: 3em 0 -8em 1em;
  }
  @media ${min.tabletLg} {
    margin: 7em 0 -2em 1em;
  }
  @media ${min.desktop} {
    margin: 8em 0 0 6em;
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
  SideImageContainer,
  LongLinesContainer,
  QuoteCarouselContainer,
  ScrollToAuthorTestimonies,
};
