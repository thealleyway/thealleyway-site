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
} from './NewsletterSignUp.styles';
import ArchModal from '../../arch-modal/ArchModal';
import ConfirmationPopup from '../../confirmation-popup/ConfirmationPopup';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';
import { PlaceHolder } from '../../base-components/BaseComponents';

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
    const validEmail = new RegExp(
      '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
    );
    if (fields['name'] == undefined || fields['name'].length === 0) {
      formIsValid = false;
      errors['name'] = 'NAME IS REQUIRED!';
    }
    if (fields['email'] == undefined || fields['email'].length === 0) {
      formIsValid = false;
      errors['email'] = 'EMAIL IS REQUIRED!';
    } else if (!validEmail.test(fields['email'])) {
      formIsValid = false;
      errors['email'] = 'INVALID EMAIL!';
    }
    setErrors(errors);
    return formIsValid;
  };

  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  if (visible) {
    return (
      <>
        <NewsletterSignUpWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", duration: 4 }}
        >
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
                setName(e.target.value);
                setFields({ ...fields, name: e.target.value });
              }}
            />
            <TextInputField
              id="email"
              label="Email"
              fullWidth
              required={true}
              showError={errors['email']}
              value={fields['email'] ? fields['email'] : ''}
              onChange={(e) => setFields({ ...fields, email: e.target.value })}
            />
            <PrivacyPolicyLinkText
              onClick={() => {
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
  return <PlaceHolder ref={placeHolderRef} />;
}
