import styled from 'styled-components';
import { H4, P, fonts, fontWeights } from '../../../style/typography';
import { colors } from '../../../style/colors';
import { max } from '../../../lib/responsive';
import { motion } from 'framer-motion';

export const RefDiv = styled(motion.div)`
  margin: 0;
  height: 100%;
  padding: 0;
`;

export const TakeActionWrapper = styled(motion.div)`
  height: 100%;
  margin: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 80vw;
`;

const TakeActionHeading = styled.h1`
  font-family: ${fonts.swearDisplay};
  font-weight: ${fontWeights.medium};
  color: ${colors.SUNSETORANGE};
  text-transform: lowercase;
  margin: 0;
`;

export const TakeActionHeadingDesktop = styled(TakeActionHeading)`
  font-size: 20vh;
  width: 5em;
  position: relative;
`;

export const ActionButtonsWrapper = styled.div`
  width: min(30vw, 25em);
  display: flex;
  justify-content: space-between;

  @media ${max.tabletLg} {
    width: 100%;
  }
`;

export const UnderlineImage = styled.img`
  width: 2.5em;
  position: absolute;
  bottom: 0;
  left: 2em;
`;

export const DescriptionText = styled(P)`
  margin-top: min(4vh, 3em);
  margin-bottom: min(6vh, 4em);
  width: min(30vw, 25em);

  @media ${max.tabletLg} {
    width: 50%;
  }

  @media ${max.tabletSm} {
    width: 60%;
  }
`;

export const TitleAndButtonWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackToStartButtonContainer = styled.div`
  height: auto;
`;

export const ShareLinkWrapper = styled(motion.div)`
  position: absolute;
  bottom: 10%;
  right: 20%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 18em;
  background: url(${(props) => props.url}) no-repeat;
  background-position: center;

  @media ${max.tabletLg} {
    position: static;
    align-self: center;
    margin-right: 0;
  }
`;

export const ShareLinkText = styled(H4)`
  font-weight: ${fontWeights.normal};
  margin-right: 2em;
`;

export const ShareLinkImage = styled.img`
  width: 4em;
`;

// Tablet and Mobile

export const TabletMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 4em;
`;

export const TabletMobileTake = styled(TakeActionHeading)`
  font-size: max(6em, 20vw);
  align-self: flex-start;
  padding-left: 15%;
`;

export const TabletMobileAction = styled(TakeActionHeading)`
  font-size: max(6em, 20vw);
  line-height: 0.3em;
`;

export const ResourceWrapper = styled.div`
  width: min(30vw, 25em);

  @media ${max.tabletLg} {
    width: 50%;
  }

  @media ${max.tabletSm} {
    width: 85%;
  }
`;
