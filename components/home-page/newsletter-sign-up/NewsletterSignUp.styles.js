import styled from 'styled-components';
import { max } from '../../../lib/responsive';
import { H2, P } from '../../../style/typography';
import { colors } from '../../../style/colors';
import { icons } from '../../../style/icons';
import TextInputField from '../../text-input-field/TextInputField';
import { HoverAnimationButton } from '../../animation-base-components/AnimationBaseComponents';
import { motion } from 'framer-motion';

export const NewsletterSignUpWrapper = styled.div`
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
  color: ${colors.BURNTORANGE};
  font-size: clamp(2em, 3vw, 3em);
  margin-left: max(-12%, -200px);
  text-transform: lowercase;

  @media ${max.tabletSm} {
    margin-left: -5%;
    margin-bottom: 5%;
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
`;

export const NewsletterSignUpTextInput = styled(TextInputField)`
  margin-bottom: 20px;
`;

export const PrivacyPolicyLinkText = styled.div`
  margin: -5px 0;
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
`;

export const SubmitButton = styled(P).attrs({
  as: HoverAnimationButton,
})`
  color: ${colors.WHITE};
  background-color: ${colors.OLIVE};
  border: none;
  width: 150px;
  height: 48px;
  font-weight: normal;
  letter-spacing: 4px;
  cursor: pointer;
  @media ${max.tabletSm} {
    align-self: center;
    width: 50%;
    letter-spacing: 2px;
  }
`;
