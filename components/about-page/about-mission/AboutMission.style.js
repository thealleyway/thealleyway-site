import styled from 'styled-components';
import { min, max } from '../../../lib/responsive';
import { motion } from 'framer-motion';

const ScrollToMission = styled.div`
  position: absolute;
  margin: -5.8em;
`;

const OurMissionContainer = styled(motion.div)`
  width: 100%;
  height: 45em;
  overflow: hidden;
  padding-bottom: 4em;
  margin-bottom: 6em;

  @media ${max.tabletLg} {
    margin-top: 0;
    margin-bottom: 12em;
  }

  @media ${min.tabletLg} {
    height: clamp(41em, 56vw, 50em);
    margin-bottom: 10em;
  }

  @media ${min.desktop} {
    height: 45em;
  }

  @media ${max.mobile} {
    height: 55em;
  }
`;

const OurMissionWrapper = styled.div`
  display: flex;
  flex: 100%;
  justify-content: center;
  align-items: center;
`;

const OurMissionImgLeft = styled.img`
  width: clamp(8em, 12vw, 12.5em);
  opacity: 10%;
  object-fit: cover;

  @media ${max.tabletLg} {
    height: 45em;
    width: clamp(5em, 14vw, 9em);
  }

  @media ${max.tabletSm} {
    width: clamp(2em, 15vw, 5em);
  }

  @media ${max.mobile} {
    height: 55em;
  }

  @media ${min.tabletLg} {
    height: clamp(41em, 56vw, 50em);
  }

  @media ${min.desktop} {
    width: 15%;
  }
`;

const OurMissionTextContainer = styled.div`
  width: clamp(20em, 25vw, 24em);
  text-align: left;
  margin: auto;

  @media ${max.tabletLg} {
    width: clamp(18em, 45vw, 22em);
  }

  @media ${max.tabletSm} {
    width: 60vw;
  }

  @media ${min.tabletLg} {
    margin-top: calc((clamp(41em, 56vw, 50em) - 5em) / 8);
  }

  @media ${min.desktop} {
    margin-top: calc((clamp(41em, 56vw, 50em) - 5em) / 6);
  }
`;

const BoxLinkWrapper = styled.div`
  @media ${max.desktopLg} {
    width: clamp(30em, 45vw, 40em);
  }
  @media ${min.desktop} {
    width: 45%;
  }
`;

const OurMissionImgRight = styled(OurMissionImgLeft)`
  width: clamp(30em, 45vw, 40em);

  @media ${max.tabletLg} {
    width: clamp(18em, 35vw, 28em);
  }

  @media ${max.tablet} {
    width: clamp(5em, 22vw, 16em);
  }

  @media ${max.tabletSm} {
    width: clamp(2em, 15vw, 5em);
  }
`;

const SparkArrowWrapper = styled.div`
  position: relative;
  bottom: 25em;
  left: calc(clamp(8em, 12vw, 12.5em) + max(3vw, clamp(1em, 1vw, 3em)));

  @media ${min.desktop} {
    left: 14.5%;
    bottom: 30em;
  }

  @media ${min.desktopLg} {
    left: 15%;
    bottom: 30em;
  }
`;

export {
  ScrollToMission,
  OurMissionContainer,
  OurMissionWrapper,
  OurMissionImgLeft,
  OurMissionImgRight,
  OurMissionTextContainer,
  BoxLinkWrapper,
  SparkArrowWrapper,
};
