import { H2, H3 } from '../../../style/typography';
import styled from 'styled-components';
import { colors } from '../../../style/colors';
import { min, max } from '../../../lib/responsive';

const ScrollToMeetFounder = styled.div`
  position: absolute;
  margin: 1em;
`;

const MeetFounderContainer = styled.div`
  height: auto;
  overflow: hidden;
  padding-bottom: 9.5em;

  @media ${max.tabletLg} {
    padding-bottom: 12em;
  }

  @media ${max.tablet} {
    margin-top: 5em;
  }

  @media ${min.tabletSm} {
    margin-top: 6em;
  }

  @media ${min.desktop} {
    margin-top: 9em;
  }
`;

const MeetFounderWrapper = styled.div`
  display: flex;
  flex: 100%;
  justify-content: center;

  @media ${max.tabletLg} {
    flex-direction: column;
    align-item: center;
  }
`;

const TextWrapper = styled.div`
  width: clamp(24em, 30vw, 28em);
  text-align: left;
  margin: 0 auto;

  @media ${max.tabletLg} {
    width: clamp(22em, 45vw, 25em);
    margin-top: 0;
  }
  @media ${max.tabletSm} {
    width: clamp(17em, 70vw, 20em);
  }
`;

const H2Wrapper = styled(H2)`
  margin: 0;
`;

const ResourceButtonsWrapper = styled.div`
  display: flex;
  flex: 100%;
  justify-content: space-between;
  margin: 0 -0.5em 0 -0.5em;

  @media ${max.tabletLg} {
    padding-right: 0;
  }

  @media ${max.tabletSm} {
    margin: 0 -2em 0 -2em;
  }
`;

const MoreResourcesTitleWrapper = styled.div`
  margin-right: -1em;

  @media ${max.tabletSm} {
    margin-right: -2em;
  }
`;

const AboutImageLeftDesktop = styled.img`
  height: 47em;
  width: 30%;
  padding-right: 2em;
  opacity: 10%;
  object-fit: cover;
`;

const AboutImageLeftTablet = styled.img`
  right: 0;
  position: absolute;
  opacity: 10%;
  object-fit: cover;
  width: 40%;
  height: 47em;
  top: clamp(85em, 145vw, 90em);

  @media ${max.tablet} {
    top: min(240vw, 76em);
  }

  @media ${max.tabletSm} {
    visibility: hidden;
  }
`;

const AboutImageQuoteWrapper = styled.div`
  width: clamp(21em, 30vw, 25em);
  padding-top: 7em;
  margin-left: 2em;

  @media ${max.tabletLg} {
    order: -1;
    margin: 0 auto;
    display: flex;
    padding-top: 0;
    width: 50em;
    margin-bottom: clamp(3em, 13vw, 5em);
  }

  @media ${max.tablet} {
    width: 90%;
    margin-bottom: 2em;
  }

  @media ${max.tabletSm} {
    width: 100%;
    padding-top: 2em;
  }
`;

const AboutImageRight = styled.img`
  height: 16em;
  width: 16em;
  z-index: 2;
  object-fit: cover;

  @media ${max.tabletLg} {
    width: clamp(11em, 23vw, 16em);
    height: clamp(11em, 23vw, 16em);
    position: relative;
    left: clamp(9em, 16vw, 10em);
  }

  @media ${max.tablet} {
    left: 10vw;
  }

  @media ${max.tabletSm} {
    order: 2;
    width: clamp(10em, 45vw, 12em);
    height: clamp(10em, 45vw, 12em);
    left: 35vw;
    top: -2.5em;
  }
`;

const AboutImageRightOpacity = styled(AboutImageRight)`
  opacity: 10%;
  position: relative;
  z-index: 1;
  left: 15%;
  top: -19em;

  @media ${max.tabletLg} {
    left: -12vw;
    top: 5vw;
  }
  @media ${max.tablet} {
    left: -22vw;
    top: 4vw;
  }
`;

const TopQuoteWrapper = styled(H3)`
  font-style: initial !important;
  margin: -1.3em 0;
  position: relative;
  top: -7em;
  width: 10em;
  color: ${colors.OLIVE};

  @media ${max.tabletLg} {
    top: 0;
    width: 10em;
    margin-right: 2em;
  }

  @media ${max.tablet} {
    left: -5vw;
    width: clamp(8em, 50vw, 10em);
    margin-right: 0;
    margin-left: calc(-1 * clamp(0.5em, 2vw, 1em));
  }

  @media ${max.tabletSm} {
    order: -1;
    left: 0.5em;
    width: 8em;
    margin-right: -4em;
    margin-left: 0;
    top: -1em;
  }
`;

const SparkArrowWrapper = styled.div`
  position: relative;
  bottom: 19em;
  left: clamp(12em, 20.75vw, 17em);

  @media ${min.desktop} {
    left: 14em;
  }

  @media ${max.tabletLg} {
    visibility: hidden;
  }
`;

export {
  ScrollToMeetFounder,
  MeetFounderContainer,
  MeetFounderWrapper,
  TextWrapper,
  H2Wrapper,
  ResourceButtonsWrapper,
  MoreResourcesTitleWrapper,
  AboutImageLeftDesktop,
  AboutImageLeftTablet,
  AboutImageQuoteWrapper,
  AboutImageRight,
  AboutImageRightOpacity,
  TopQuoteWrapper,
  SparkArrowWrapper,
};
