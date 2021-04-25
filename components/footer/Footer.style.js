import styled from 'styled-components';
import { colors } from '../../style/colors';
import { max } from '../../lib/responsive';

const FooterContainer = styled.div`
  margin-top: ${(props) => (props.topMargin ? '10em' : '0')};
  width: 100%;
  bottom: 0;
  right: 0;

  display: flex;
  flex: 100%;
  flex-direction: column;
`;

const FooterSocialsContainer = styled.div`
  background-color: ${colors.OLIVE};
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
  padding-top: 4em;
  padding-left: 4em;
  width: 35%;

  @media only screen and ${max.tablet} {
    width: 50%;
    padding-top: clamp(1em, 5vw, 3em);
    padding-left: 1.8em;
  }

  @media only screen and ${max.tabletSm} {
    width: 60%;
    padding-left: clamp(1.5em, 3vw, 2em);
  }
`;

const SocialsWrapper = styled.div`
  padding-top: 4em;
  padding-left: clamp(3em, 8vw, 4em);
  width: 40%;

  @media only screen and ${max.tablet} {
    padding-top: clamp(1em, 5vw, 3em);
  }
  @media only screen and ${max.tabletSm} {
    padding-left: clamp(1.5em, 3vw, 2em);
  }
`;

const BackToStartButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 1em;
  padding-bottom: 9em;

  @media only screen and ${max.tabletLg} {
    padding-bottom: 8em;
  }
`;

export {
  FooterContainer,
  FooterSocialsContainer,
  EmailWrapper,
  SocialsWrapper,
  BackToStartButtonContainer,
};
