import React from 'react';
import H1Styled from '../H1Styled/H1Styled';
import ConfirmationPopup from '../confirmationPopup/ConfirmationPopup';
import { useState } from 'react';
import PageDescription from '../pageDescription/PageDescription';
import ContactForm from './contactForm/ContactForm';
import { icons } from '../../style/icons';
import { breakpointsObj } from '../../lib/responsive';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import MediaQuery from 'react-responsive';
import BackToStartVerticalButton from '../backToStartVerticalButton/BackToStartVerticalButton';
import {
  Overlay,
  FormContainer,
  PageContainer,
  HeaderAndSquiggleContainer,
  SquiggleUnderline,
  BackToStartButtonContainer,
} from './ContactPage.styles';
import ImageBoxLink from '../imageBoxLink/ImageBoxLink';

export default function ContactPage({
  contactPageData,
  boxLinkData,
  navigationData,
  footerData,
}) {
  const {
    contact_page_title_regular: contactPageTitleRegular,
    contact_page_title_italic: contactPageTitleItalic,
    contact_page_description: contactPageDescription,
    contact_image_top: contactImageTop,
    contact_image_bottom: contactImageBottom,
    contact_confirmation_title_regular_1: confirmationTitleRegular1,
    contact_confirmation_title_italic_2: confirmationTitleItalic2,
    contact_confirmation_title_regular_3: confirmationTitleRegular3,
    contact_confirmation_description: confirmationDescription,
    contact_confirmation_image: confirmationImage,
    spark_arrow_description_text: sparkArrowDescriptionText,
  } = contactPageData;

  const contactConfirmationData = {
    confirmationTitleRegular1,
    confirmationTitleItalic2,
    confirmationTitleRegular3,
    confirmationDescription,
    confirmationImage,
  };

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navigation navigationData={navigationData} />
      <HeaderAndSquiggleContainer>
        <H1Styled
          regular={contactPageTitleRegular}
          italicized={contactPageTitleItalic}
        ></H1Styled>
        <SquiggleUnderline
          src={icons.SQUIGGLE_UNDERLINE}
          alt="Contact page header squiggle underline"
        />
      </HeaderAndSquiggleContainer>
      <PageDescription
        description={contactPageDescription}
        arrowText={sparkArrowDescriptionText}
        img={contactImageTop}
      />
      <PageContainer>
        <FormContainer>
          <ContactForm togglePopup={togglePopup} />
        </FormContainer>
        <ImageBoxLink img={contactImageBottom} boxLinkData={boxLinkData} />
        {isOpen && (
          <ConfirmationPopup
            confirmationData={contactConfirmationData}
            togglePopup={togglePopup}
          />
        )}
        <MediaQuery maxDeviceWidth={breakpointsObj.desktop - 1}>
          <BackToStartButtonContainer>
            <BackToStartVerticalButton />
          </BackToStartButtonContainer>
        </MediaQuery>
      </PageContainer>
      <Overlay showOverlay={isOpen} />
      <Footer footerData={footerData} />
    </>
  );
}
