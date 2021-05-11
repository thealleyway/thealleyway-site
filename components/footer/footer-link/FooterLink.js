import {
  FooterLinkWrapper,
  FooterLinkContainer,
  FooterLinkText,
} from './FooterLink.style';
import { colors } from '../../../style/colors';

export default function FooterLink({ label, link }) {
  return (
    <FooterLinkContainer>
      <FooterLinkWrapper href={link} target="_blank" color={colors.WHITE}>
        <FooterLinkText>{label}</FooterLinkText>
      </FooterLinkWrapper>
    </FooterLinkContainer>
  );
}
