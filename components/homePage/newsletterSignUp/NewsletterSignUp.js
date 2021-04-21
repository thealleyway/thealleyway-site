import React, { useState } from 'react';
import { getString } from '../../../lib/richText';
import { colors } from '../../../style/colors';
import TextInputField from '../../textInputField/TextInputField';
import ArchModal from '../../archModal/ArchModal';
import NewsletterConfirmationModal from './newsletterConfirmationModal/NewsletterConfirmationModal';
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

export default function NewsletterSignUp({
  description,
  newsletterConfirmationData,
  privacyPolicyLinkTitle,
  privacyPolicyText,
  title,
}) {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

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
          <NewsletterSignUpTextInput id="name" label="Name" fullWidth />
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
          <NewsletterConfirmationModal
            newsletterConfirmationData={newsletterConfirmationData}
          />
        )}
      </NewsletterSignUpWrapper>
      <Overlay showOverlay={isPrivacyPolicyOpen || isConfirmationOpen} />
    </>
  );
}
