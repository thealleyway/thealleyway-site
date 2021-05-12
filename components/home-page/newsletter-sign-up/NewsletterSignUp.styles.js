import styled from 'styled-components';
import { max } from '../../../lib/responsive';
import { H2, P, InputInfoText } from '../../../style/typography';
import { colors } from '../../../style/colors';
import { icons } from '../../../style/icons';
import { HoverAnimationButton } from '../../animation-base-components/AnimationBaseComponents';
import { motion } from 'framer-motion';

export const NewsletterSignUpWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
  position: relative;
  background-image: url(${icons.DOUBLE_ELLIPSES});
  background-repeat: no-repeat;
  background-position: center;
  @media ${max.tabletLg} {
    background-size: min(700px, 170%);
  }
`;

export const NewsletterSignUpTitle = styled(H2)`
  color: ${colors.SUNSETORANGE};
  font-size: clamp(2em, 3vw, 3em);
  margin-left: max(-12%, -200px);
  text-transform: lowercase;
  margin-top: 0;
  margin-bottom: 0.5em;

  @media ${max.tabletSm} {
    margin-left: -5%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  width: 25%;
  min-width: min(65%, 240px);
`;

export const NewsletterDescriptionText = styled(P)`
  margin-top: 0px;
  margin-bottom: 0;
`;

export const PrivacyPolicyLinkText = styled(InputInfoText)`
  margin: -1.5em 0 1em 0;

  @media ${max.tabletLg} {
    margin-top: -0.5em;
  }
`;

export const SubmitButtonContainer = styled(motion.button)`
  width: 150px;
  height: 48px;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  overflow: hidden;
  outline: none;
  align-self: flex-end;
  margin-top: 1em;
`;

export const SubmitButton = styled(P).attrs({
  as: HoverAnimationButton,
})`
  color: ${colors.FRESHSNOW};
  background-color: ${colors.OLIVE};
  border: none;
  width: 150px;
  height: 48px;
  font-weight: normal;
  letter-spacing: 0.13em;
  cursor: pointer;

  @media ${max.tabletSm} {
    align-self: center;
    width: 50%;
  }
`;
