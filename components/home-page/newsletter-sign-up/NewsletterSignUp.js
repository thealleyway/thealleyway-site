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
} from './NewsletterSignUp.styles';
import ArchModal from '../../arch-modal/ArchModal';
import ConfirmationPopup from '../../confirmation-popup/ConfirmationPopup';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';
import { PlaceHolder } from '../../base-components/BaseComponents';
import { fieldNames, addToList } from '../../../lib/utils';
import { useValidEmail } from '../../../lib/hooks';
import {
  SubmitButton,
  SubmitButtonContainer,
} from '../../base-components/BaseComponents';

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
    const firstName = name ? name.trim().split(' ')[0] : '';
    const lastName =
      name && name.trim().split(' ').length > 1
        ? name.trim().split(' ')[1]
        : '';

    if (isValidSubmission()) {
      addToList(
        fields[fieldNames.EMAIL],
        (_, data) => {
          if ('error' in data) {
            alert(
              'Unable to subscribe to the newsletter, please try again later.',
            );
          } else {
            setIsConfirmationOpen(true);
            setFields({});
          }
        },
        firstName,
        lastName,
      );
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
          transition={{ type: 'spring', duration: 4 }}
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
                role="button"
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
  return <PlaceHolder ref={placeHolderRef} />;
}
