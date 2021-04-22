import React, { useState } from 'react';
import { getString } from '../../../lib/richText';
import { colors } from '../../../style/colors';
import TextInputField from '../../textInputField/TextInputField';
import ArchModal from '../../archModal/ArchModal';
import {
  ContentWrapper,
  NewsletterSignUpTextInput,
  NewsletterSignUpTitle,
  NewsletterDescriptionText,
  NewsletterSignUpWrapper,
  Overlay,
  PrivacyPolicyLinkText,
  SubmitButton,
} from './NewsletterSignUp.styles';
import ConfirmationPopup from '../../confirmationPopup/ConfirmationPopup';

export default function NewsletterSignUp({
  description,
  newsletterConfirmationData,
  privacyPolicyLinkTitle,
  privacyPolicyText,
  title,
}) {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [name, updateName] = useState('');
  const onSubmitClick = () => {
    setIsConfirmationOpen(true);
  };

  return (
    <>
      <NewsletterSignUpWrapper>
        <NewsletterSignUpTitle>{getString(title)}</NewsletterSignUpTitle>
        <ContentWrapper>
          <NewsletterDescriptionText>
            {getString(description)}
          </NewsletterDescriptionText>
          <NewsletterSignUpTextInput
            id="name"
            label="Name"
            fullWidth
            onChange={(e) => updateName(e)}
          />
          <TextInputField id="email" label="Email" fullWidth />
          <PrivacyPolicyLinkText
            onClick={() => {
              document.body.style.overflow = 'hidden';
              setIsPrivacyPolicyOpen(true);
            }}
          >
            {getString(privacyPolicyLinkTitle)}
          </PrivacyPolicyLinkText>
          <SubmitButton
            color={colors.WHITE}
            type="submit"
            onClick={onSubmitClick}
          >
            SUBMIT
          </SubmitButton>
        </ContentWrapper>
        {isPrivacyPolicyOpen && (
          <ArchModal
            text={privacyPolicyText}
            onClose={() => {
              document.body.style.overflow = 'visible';
              setIsPrivacyPolicyOpen(false);
            }}
          />
        )}
        {isConfirmationOpen && (
          <ConfirmationPopup
            confirmationData={newsletterConfirmationData}
            togglePopup={setIsConfirmationOpen}
            name={name}
            page="home"
          />
        )}
      </NewsletterSignUpWrapper>
      <Overlay showOverlay={isPrivacyPolicyOpen || isConfirmationOpen} />
    </>
  );
}
