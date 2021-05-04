import styled from 'styled-components';
import { min, max } from '../../../lib/responsive';

const OurMissionContainer = styled.div`
  width: 100%;
  height: fit-content;
  overflow: hidden;
  margin-top: 4em;
  margin-bottom: 6em;
`;

const OurMissionWrapper = styled.div`
  display: flex;
  flex: 100%;
  justify-content: center;
`;

const OurMissionImgLeft = styled.img`
  height: clamp(30em, 50vw, 40em);
  width: clamp(9em, 15vw, 12.5em);
  opacity: 10%;
  object-fit: cover;

  @media ${max.tabletLg} {
    width: clamp(5em, 14vw, 9em);
    height: auto;
  }

  @media ${max.tabletSm} {
    width: clamp(2em, 15vw, 5em);
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
`;

const BoxLinkWrapper = styled.div`
  width: clamp(30em, 45vw, 40em);
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
  bottom: 18em;
  left: clamp(12em, 20.75vw, 17em);

  @media ${min.desktop} {
    left: 14em;
  }
`;

export {
  OurMissionContainer,
  OurMissionWrapper,
  OurMissionImgLeft,
  OurMissionImgRight,
  OurMissionTextContainer,
  BoxLinkWrapper,
  SparkArrowWrapper,
};
