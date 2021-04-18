import React from 'react';
import H1Styled from '../H1Styled/H1Styled';
import ContactConfirmationPopup from './contactConfirmationPopup/ContactConfirmationPopup';
import { useState } from 'react';
import PageDescription from '../pageDescription/PageDescription';
import ContactForm from './contactForm/ContactForm';
import BoxLink from '../boxLink/BoxLink';
import { icons } from '../../style/icons';
import { breakpointsObj } from '../../lib/responsive';
import MediaQuery from 'react-responsive';
import BackToStartVerticalButton from '../backToStartVerticalButton/BackToStartVerticalButton';
import {
  FormContainer,
  PageContainer,
  HeaderAndSquiggleContainer,
  SquiggleUnderline,
  BackToStartButtonContainer,
  BottomImageContainer,
  BottomImage,
  ImageBoxLinkContainer,
  BoxLinkContainer,
} from './ContactPage.styles';

export default function ContactPage({ contactPageData, boxLinkData }) {
  const {
    contact_page_title_regular: contactPageTitleRegular,
    contact_page_title_italic: contactPageTitleItalic,
    contact_page_description: contactPageDescription,
    contact_image_top: contactImageTop,
    contact_image_bottom: contactImageBottom,
    contact_confirmation_title_regular_1,
    contact_confirmation_title_italic_2,
    contact_confirmation_title_regular_3,
    contact_confirmation_description,
    contact_confirmation_image,
  } = contactPageData;

  const contactConfirmationData = {
    contact_confirmation_title_regular_1,
    contact_confirmation_title_italic_2,
    contact_confirmation_title_regular_3,
    contact_confirmation_description,
    contact_confirmation_image,
  };

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
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
        arrowText="LET'S CONNECT"
        img={contactImageTop}
      />
      <PageContainer>
        <FormContainer>
          <ContactForm togglePopup={togglePopup} />
        </FormContainer>
        <ImageBoxLinkContainer>
          <BottomImageContainer>
            <BottomImage
              src={contactImageBottom.url}
              alt={contactImageBottom.alt}
            />
          </BottomImageContainer>
          <BoxLinkContainer>
            <BoxLink boxLinkData={boxLinkData} />
          </BoxLinkContainer>
        </ImageBoxLinkContainer>
        {isOpen && (
          <ContactConfirmationPopup
            contactConfirmationData={contactConfirmationData}
            togglePopup={togglePopup}
          />
        )}
        <MediaQuery maxDeviceWidth={breakpointsObj.desktop - 1}>
          <BackToStartButtonContainer>
            <BackToStartVerticalButton />
          </BackToStartButtonContainer>
        </MediaQuery>
      </PageContainer>
    </>
  );
}
