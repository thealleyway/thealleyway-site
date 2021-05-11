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
import BackToStartButton from '../back-to-start-button/BackToStartButton';
import React, { useState, useRef, useEffect } from "react";
import { registerObserver } from '../../lib/intersectionObserver';
import { PlaceHolder } from '../base-components/BaseComponents';

export default function Footer({ footerData, footerBoxLinkData }) {
  const {
    contact_email: contactEmail,
    instagram_link: { url: instagramLink },
    tiktok_link: { url: tiktokLink },
  } = footerData;

  const mailToLink = 'mailto:' + getString(contactEmail);
  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  if (visible) {
    return (
      <FooterContainer topMargin={footerBoxLinkData ? true : false}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        {footerBoxLinkData && <ImageBoxLink boxLinkData={footerBoxLinkData} />}
        {!footerBoxLinkData && (
          <BackToStartButtonContainer>
            <BackToStartButton />
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
  return <PlaceHolder ref={placeHolderRef} />;
}
