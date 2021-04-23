import { getString } from '../../lib/richText';
import {
  FooterContainer,
  FooterSocialsContainer,
  EmailWrapper,
  SocialsWrapper,
  BackToStartButtonContainer,
} from './Footer.style';
import FooterLink from './footerLink/FooterLink';
import ImageBoxLink from '../imageBoxLink/ImageBoxLink';
import BackToStartVerticalButton from '../backToStartVerticalButton/BackToStartVerticalButton';

export default function Footer({ footerData, footerBoxLinkData }) {
  const {
    contact_email: contactEmail,
    instagram_link: { url: instagramLink },
    tiktok_link: { url: tiktokLink },
  } = footerData;

<<<<<<< HEAD
=======
  const mailToLink = 'mailto:' + getString(contactEmail);

>>>>>>> Footer and FooterLink component and styling
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
