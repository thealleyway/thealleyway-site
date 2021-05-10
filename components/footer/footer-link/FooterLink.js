import { FooterLinkWrapper, FooterLinkContainer } from './FooterLink.style';

export default function FooterLink({ label, link }) {
  return (
    <FooterLinkContainer>
      <FooterLinkWrapper href={link} target="_blank" rel="noreferrer">
        {label}
      </FooterLinkWrapper>
    </FooterLinkContainer>
  );
}
