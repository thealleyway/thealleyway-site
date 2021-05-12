import React, { useState } from 'react';
import { getString } from '../../../lib/richText';
import { colors } from '../../../style/colors';
import TextInputField from '../../text-input-field/TextInputField';
import { Overlay } from '../../base-components/BaseComponents';
import {
  ContentWrapper,
  NewsletterSignUpTitle,
  NewsletterDescriptionText,
  NewsletterSignUpWrapper,
  PrivacyPolicyLinkText,
  SubmitButton,
  SubmitButtonContainer,
} from './NewsletterSignUp.styles';
import ArchModal from '../../arch-modal/ArchModal';
import ConfirmationPopup from '../../confirmation-popup/ConfirmationPopup';
import { fieldNames } from '../../../lib/utils';
import { useValidEmail } from '../../../lib/hooks';

export default function NewsletterSignUp({
  description,
  newsletterConfirmationData,
  privacyPolicyLinkTitle,
  privacyPolicyText,
  title,
}) {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [name, setName] = useState('');
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  const onSubmitClick = () => {
    if (isValidSubmission()) {
      setIsConfirmationOpen(true);
      setFields({});
    }
  };

  const isValidSubmission = () => {
    let errors = {};
    let formIsValid = true;

    if (
      fields[fieldNames.NAME] == undefined ||
      fields[fieldNames.NAME].length === 0
    ) {
      formIsValid = false;
      errors[fieldNames.NAME] = 'NAME IS REQUIRED!';
    }
    if (
      fields[fieldNames.EMAIL] == undefined ||
      fields[fieldNames.EMAIL].length === 0
    ) {
      formIsValid = false;
      errors[fieldNames.EMAIL] = 'EMAIL IS REQUIRED!';
    } else if (useValidEmail(fields[fieldNames.EMAIL])) {
      formIsValid = false;
      errors[fieldNames.EMAIL] = 'INVALID EMAIL!';
    }
    setErrors(errors);
    return formIsValid;
  };

  return (
    <>
      <NewsletterSignUpWrapper>
        <NewsletterSignUpTitle>{getString(title)}</NewsletterSignUpTitle>
        <ContentWrapper>
          <NewsletterDescriptionText>
            {getString(description)}
          </NewsletterDescriptionText>
          <TextInputField
            id="name"
            label="Name"
            fullWidth
            required
            showError={errors[fieldNames.NAME]}
            value={fields[fieldNames.NAME] ? fields[fieldNames.NAME] : ''}
            onChange={(e) => {
              setName(e.target.value);
              setFields({ ...fields, NAME: e.target.value });
            }}
          />
          <TextInputField
            id="email"
            label="Email"
            fullWidth
            required={true}
            showError={errors[fieldNames.EMAIL]}
            value={fields[fieldNames.EMAIL] ? fields[fieldNames.EMAIL] : ''}
            onChange={(e) => setFields({ ...fields, EMAIL: e.target.value })}
          />
          <PrivacyPolicyLinkText
            onClick={() => {
              setIsPrivacyPolicyOpen(true);
            }}
          >
            {getString(privacyPolicyLinkTitle)}
          </PrivacyPolicyLinkText>
          <SubmitButtonContainer
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
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
