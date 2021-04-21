import styled from 'styled-components';
import { max } from '../../../lib/responsive';
import { H2, P } from '../../../style/typography';
import { colors } from '../../../style/colors';
import { icons } from '../../../style/icons';
import TextInputField from '../../textInputField/TextInputField';
import { HoverAnimationButton } from '../../animationBaseComponents/animationBaseComponents';

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

export const PrivacyPolicyLinkText = styled(P)`
  color: ${colors.MAUVE};
  font-size: 0.8em;
  text-transform: lowercase;
  text-align: right;
  margin: 6px 0px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const SubmitButton = styled(P).attrs({
  as: HoverAnimationButton,
})`
  color: ${colors.WHITE};
  background-color: ${colors.OLIVE};
  border: none;
  width: 150px;
  height: 48px;
  margin-top: 10px;
  align-self: flex-end;
  font-weight: normal;
  letter-spacing: 4px;
  cursor: pointer;

  @media ${max.tabletSm} {
    align-self: center;
    width: 50%;
    letter-spacing: 2px;
  }
`;

export const Overlay = styled.div`
  display: ${(props) => (props.showOverlay ? 'block' : 'none')};
  position: fixed;
  background-color: ${colors.CREME};
  opacity: 0.7;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;
`;
