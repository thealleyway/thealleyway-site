import { getString } from '../../lib/richText';
import {
  FooterContainer,
  FooterSocialsContainer,
  EmailWrapper,
  SocialsWrapper,
  BackToStartButtonContainer,
} from './Footer.style';
import FooterLink from './footer-link/FooterLink';
import ImageBoxLink from '../image-box-link/ImageBoxLink';
import BackToStartVerticalButton from '../back-to-start-vertical-button/BackToStartVerticalButton';

export default function Footer({ footerData, footerBoxLinkData }) {
  const {
    contact_email: contactEmail,
    instagram_link: { url: instagramLink },
    tiktok_link: { url: tiktokLink },
  } = footerData;

  const mailToLink = 'mailto:' + getString(contactEmail);

  return (
    <FooterContainer topMargin={footerBoxLinkData ? true : false}>
      {footerBoxLinkData && <ImageBoxLink boxLinkData={footerBoxLinkData} />}
      {!footerBoxLinkData && (
        <BackToStartButtonContainer>
          <BackToStartVerticalButton />
        </BackToStartButtonContainer>
      )}
      <FooterSocialsContainer>
        <EmailWrapper>
          <FooterLink label={getString(contactEmail)} link={mailToLink} />
        </EmailWrapper>
        <SocialsWrapper>
          <FooterLink label="Instagram" link={instagramLink} />
          <FooterLink label="Tiktok" link={tiktokLink} />
          <FooterLink label="Facebook" link="#" />
          <FooterLink label="Twitter" link="#" />
        </SocialsWrapper>
      </FooterSocialsContainer>
    </FooterContainer>
  );
}
