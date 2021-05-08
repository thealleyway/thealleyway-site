import React, { useState } from 'react';
import { getString } from '../../../lib/richText';
import { colors } from '../../../style/colors';
import { InputInfoText } from '../../../style/typography';
import TextInputField from '../../text-input-field/TextInputField';
import { Overlay } from '../../base-components/BaseComponents';
import {
  ContentWrapper,
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
  const [fields, setFields] = useState({});
  const [name, updateName] = useState('');
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
    const validEmail = new RegExp(
      '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
    );
    if (fields['name'] == undefined || fields['name'].length === 0) {
      formIsValid = false;
      errors['name'] = 'NAME IS REQUIRED!';
    }
    if (!validEmail.test(fields['email'])) {
      formIsValid = false;
      errors['email'] = 'EMAIL IS REQUIRED!';
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
            showError={errors['name']}
            value={fields['name'] ? fields['name'] : ''}
            onChange={(e) => {
              setFields({ ...fields, name: e });
              updateName(e);
            }}
          />
          <TextInputField
            id="email"
            label="Email"
            fullWidth
            required={true}
            showError={errors['email']}
            value={fields['email'] ? fields['email'] : ''}
            onChange={(e) => setFields({ ...fields, email: e })}
          />
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
