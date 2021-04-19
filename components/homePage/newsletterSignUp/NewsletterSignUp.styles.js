import styled, { keyframes } from 'styled-components';
import { max } from '../../../lib/responsive';
import { H2, P } from '../../../style/typography';
import { colors } from '../../../style/colors';
import { icons } from '../../../style/icons';
import TextInputField from '../../textInputField/TextInputField';

export const NewsletterSignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 900px;
  position: relative;
  background-image: url(${icons.DOUBLE_ELLIPSES});
  background-repeat: no-repeat;
  background-position: center;
  @media ${max.tablet} {
    background-size: 900px;
  }
`;

export const NewsletterSignUpTitle = styled(H2)`
  color: ${colors.BURNTORANGE};
  font-size: clamp(2em, 3vw, 3em);
  margin-left: -250px;
  text-transform: lowercase;

  @media ${max.tablet} {
    margin-left: -100px;
  }

  @media ${max.tabletSm} {
    margin-left: 0px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: max(35%, 300px);

  @media ${max.mobile} {
    width: 90%;
  }
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

const MoreAnimation = keyframes`
  from { background-position: left center };
  to { background-position: right center };
`;

export const SubmitButton = styled(P).attrs({
  as: 'button',
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

  &:hover {
    animation: ${MoreAnimation} 0.8s forwards;
    --shadow: 0.35px;
    --neg-shadow: calc(-1 * var(--shadow));

    text-shadow: var(--neg-shadow) var(--neg-shadow) 0 ${colors.WHITE},
      var(--shadow) var(--neg-shadow) 0 ${colors.WHITE},
      var(--neg-shadow) var(--shadow) 0 ${colors.WHITE},
      var(--shadow) var(--shadow) 0 ${colors.WHITE};
    transition: all 0.8s;
  }
`;

export const Overlay = styled.div`
  display: ${(props) => (props.showOverlay ? 'block' : 'none')};
  position: fixed;
  background-color: ${colors.WHITE};
  opacity: 0.7;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;
`;
