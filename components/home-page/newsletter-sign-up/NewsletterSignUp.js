import React, { useState } from 'react';
import { getString } from '../../../lib/richText';
import { colors } from '../../../style/colors';
import { InputInfoText } from '../../../style/typography';
import TextInputField from '../../text-input-field/TextInputField';
import { Overlay } from '../../base-components/BaseComponents';
import {
  ContentWrapper,
  NewsletterSignUpTextInput,
  NewsletterSignUpTitle,
  NewsletterDescriptionText,
  NewsletterSignUpWrapper,
  PrivacyPolicyLinkText,
  SubmitButton,
} from './NewsletterSignUp.styles';
import ArchModal from '../../arch-modal/ArchModal';
import ConfirmationPopup from '../../confirmation-popup/ConfirmationPopup';

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
            onChange={(e) => updateName(e.target.value)}
            required={true}
          />
          <TextInputField id="email" label="Email" fullWidth required />
          <PrivacyPolicyLinkText>
            <InputInfoText
              onClick={() => {
                setIsPrivacyPolicyOpen(true);
              }}
            >
              {getString(privacyPolicyLinkTitle)}
            </InputInfoText>
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
