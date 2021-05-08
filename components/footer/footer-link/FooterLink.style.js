import styled from 'styled-components';
import { colors } from '../../../style/colors';
import { P } from '../../../style/typography';
import { HoverAnimationButton } from '../../animation-base-components/AnimationBaseComponents';

const FooterLinkWrapper = styled(HoverAnimationButton)`
  border: none;
  cursor: pointer;
  background: none;
  padding: 0;
  margin: 0;
`;

const FooterLinkText = styled(P)`
  color: ${colors.WHITE};
  margin: 0;
  letter-spacing: 0.13em;
  text-transform: uppercase;
`;

const FooterLinkContainer = styled.div`
  margin: 0.25em;
`;

export { FooterLinkWrapper, FooterLinkContainer, FooterLinkText };
