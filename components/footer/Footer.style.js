import styled from 'styled-components';
import { colors } from '../../style/colors';
import { max } from '../../lib/responsive';
import { motion } from 'framer-motion';

const FooterContainer = styled(motion.div)`
  margin-top: ${(props) => (props.topMargin ? '8em' : '0')};
  width: 100%;
  bottom: 0;
  right: 0;
  display: flex;
  flex: 100%;
  flex-direction: column;
`;

const FooterSocialsContainer = styled.div`
  background-color: ${colors.DEWYGRASS};
  width: 100%;
  min-height: 15em;
  display: flex;
  flex: 100%;

  @media only screen and ${max.tablet} {
    height: clamp(11em, 28vh, 15em);
  }

  @media only screen and ${max.tabletSm} {
    height: 11em;
    overflow: hidden;
    flex-direction: column;
  }
`;

const EmailWrapper = styled.div`
  padding-top: 3.4em;
  padding-left: 4em;
  width: 35%;

  @media only screen and ${max.tabletLg} {
    width: 50%;
    padding-left: 1.8em;
    padding-top: 0;
    margin: auto 0;
  }

  @media only screen and ${max.tablet} {
    width: 60%;
    padding-left: clamp(1.5em, 3vw, 2em);
  }
`;

const SocialsWrapper = styled.div`
  padding-left: clamp(3em, 8vw, 4em);
  width: 40%;
  margin: auto 0;

  @media only screen and ${max.tabletSm} {
    padding-left: clamp(1.5em, 3vw, 2em);
    margin: auto 0;
  }
`;

const BackToStartButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 1em;
  padding-bottom: 4em;
`;

export {
  FooterContainer,
  FooterSocialsContainer,
  EmailWrapper,
  SocialsWrapper,
  BackToStartButtonContainer,
};
