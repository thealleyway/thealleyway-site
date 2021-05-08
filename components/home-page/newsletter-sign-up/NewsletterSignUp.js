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
  SubmitButtonContainer
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
            onChange={(e) => updateName(e)}
            required={true}
          />
          <TextInputField id="email" label="Email" fullWidth required />
          <PrivacyPolicyLinkText>
            <InputInfoText
              onClick={() => {
                document.body.style.overflow = 'hidden';
                setIsPrivacyPolicyOpen(true);
              }}
            >
              {getString(privacyPolicyLinkTitle)}
            </InputInfoText>
          </PrivacyPolicyLinkText>
          <SubmitButtonContainer             whileHover={{scale: 1.02}}
            whileTap={{scale: .98}}>
          <SubmitButton
            color={colors.WHITE}
            type="submit"
            onClick={onSubmitClick}
          >
            SUBMIT
          </SubmitButton>
          </SubmitButtonContainer>
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
