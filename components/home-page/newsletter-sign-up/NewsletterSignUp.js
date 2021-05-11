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
  const [name, updateName] = useState('');

  const onSubmitClick = () => {
    setIsConfirmationOpen(true);
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
  return <PlaceHolder ref={placeHolderRef} />;
}
