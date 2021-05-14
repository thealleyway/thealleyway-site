import TextInputField from '../../text-input-field/TextInputField';
import TextInputBox from '../../text-input-box/TextInputBox';
import {
  ContactFormContainer,
  InputBoxWrapper,
  ButtonWrapper,
} from './ContactForm.styles';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';
import { PlaceHolder } from '../../base-components/BaseComponents';
import {
  fieldNames,
  MESSAGE_LENGTH_MINIMUM,
  sendStoryEmail,
} from '../../../lib/utils';
import { colors } from '../../../style/colors';
import { useValidEmail } from '../../../lib/hooks';
import {
  SubmitButton,
  SubmitButtonContainer,
} from '../../base-components/BaseComponents';

export default function ContactForm({ togglePopup }) {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  const isValidSubmission = () => {
    let errors = {};
    let formIsValid = true;

    if (!fields[fieldNames.FIRST_NAME]) {
      formIsValid = false;
      errors[fieldNames.FIRST_NAME] = 'FIRST NAME IS REQUIRED!';
    }
    if (!fields[fieldNames.EMAIL]) {
      formIsValid = false;
      errors[fieldNames.EMAIL] = 'EMAIL IS REQUIRED!';
    } else if (useValidEmail(fields[fieldNames.EMAIL])) {
      formIsValid = false;
      errors[fieldNames.EMAIL] = 'INVALID EMAIL!';
    }
    if (
      !fields[fieldNames.MESSAGE] ||
      fields[fieldNames.MESSAGE].length < MESSAGE_LENGTH_MINIMUM
    ) {
      formIsValid = false;
      errors[
        fieldNames.MESSAGE
      ] = `MESSAGE MUST BE AT LEAST ${MESSAGE_LENGTH_MINIMUM} CHARACTERS!`;
    }
    setErrors(errors);
    return formIsValid;
  };

  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  const submitRequest = async () => {
    if (isValidSubmission()) {
      const name = `${fields[fieldNames.FIRST_NAME]} ${
        fields[fieldNames.LAST_NAME] || ''
      }`;
      const subject = `Contact Form: ${name}`;

      try {
        await sendStoryEmail(
          name,
          subject,
          fields[fieldNames.EMAIL],
          fields[fieldNames.MESSAGE],
        );
        return true;
      } catch (error) {
        alert(
          `Error sending email, please try again later. \n${error.message}`,
        );
        return false;
      }
    }
  };

  if (visible) {
    return (
      <ContactFormContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', duration: 4 }}
      >
        <TextInputField
          id="firstName"
          label="First Name"
          required
          showError={errors[fieldNames.FIRST_NAME]}
          value={
            fields[fieldNames.FIRST_NAME] ? fields[fieldNames.FIRST_NAME] : ''
          }
          onChange={(e) => setFields({ ...fields, FIRST_NAME: e.target.value })}
        />
        <TextInputField
          id="lastName"
          label="Last Name"
          value={
            fields[fieldNames.LAST_NAME] ? fields[fieldNames.LAST_NAME] : ''
          }
          onChange={(e) => setFields({ ...fields, LAST_NAME: e.target.value })}
        />
        <TextInputField
          id="email"
          label="Email"
          required
          showError={errors[fieldNames.EMAIL]}
          value={fields[fieldNames.EMAIL] ? fields[fieldNames.EMAIL] : ''}
          onChange={(e) => setFields({ ...fields, EMAIL: e.target.value })}
        />
        <InputBoxWrapper>
          <TextInputBox
            label="Message"
            showError={errors[fieldNames.MESSAGE]}
            required
            value={fields[fieldNames.MESSAGE] ? fields[fieldNames.MESSAGE] : ''}
            onChange={(e) => setFields({ ...fields, MESSAGE: e.target.value })}
          />
        </InputBoxWrapper>
        <ButtonWrapper>
          <SubmitButtonContainer
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <SubmitButton
              aria-label="Submission Button"
              color={colors.WHITE}
              type="submit"
              role="button"
              onClick={async () => {
                const response = await submitRequest();
                if (response) {
                  document.body.style.overflow = 'hidden';
                  document.querySelector('#area').value = '';
                  setFields({});
                  togglePopup();
                }
              }}
            >
              SUBMIT
            </SubmitButton>
          </SubmitButtonContainer>
        </ButtonWrapper>
      </ContactFormContainer>
    );
  }
  return <PlaceHolder ref={placeHolderRef} />;
}
