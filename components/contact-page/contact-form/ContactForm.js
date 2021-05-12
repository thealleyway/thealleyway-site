import TextInputField from '../../text-input-field/TextInputField';
import TextInputBox from '../../text-input-box/TextInputBox';
import SquareButton from '../../square-button/SquareButton';
import {
  ContactFormContainer,
  InputBoxWrapper,
  ButtonWrapper,
} from './ContactForm.styles';
import { emailEndpoint, axiosConfig, proxyurl } from '../../../lib/utils';
import { fieldNames } from '../../../lib/utils';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';
import { PlaceHolder } from '../../base-components/BaseComponents';

const axios = require('axios');

export default function ContactForm({ togglePopup }) {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  const isValidSubmission = () => {
    let errors = {};
    let formIsValid = true;
    const validEmail = new RegExp(
      '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
    );
    if (
      fields[fieldNames.FIRST_NAME] == undefined ||
      fields[fieldNames.FIRST_NAME].length === 0
    ) {
      formIsValid = false;
      errors[fieldNames.FIRST_NAME] = 'FIRST NAME IS REQUIRED!';
    }
    if (!validEmail.test(fields[fieldNames.EMAIL])) {
      formIsValid = false;
      errors[fieldNames.EMAIL] = 'EMAIL IS REQUIRED!';
    }
    if (
      fields[fieldNames.MESSAGE] == undefined ||
      fields[fieldNames.MESSAGE].length === 0
    ) {
      formIsValid = false;
      errors[fieldNames.MESSAGE] = 'MESSAGE IS REQUIRED!';
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
          <SquareButton
            aria-label="Submission Button"
            buttonText="SUBMIT"
            onClick={() => {
              if (submitRequest()) {
                document.querySelector('#area').value = '';
                setFields({});
                togglePopup();
              }
            }}
          />
        </ButtonWrapper>
      </ContactFormContainer>
    );
  }
  return <PlaceHolder ref={placeHolderRef} />;

  function submitRequest() {
    const name = `${fields[fieldNames.FIRST_NAME]} ${
      fields[fieldNames.LAST_NAME]
    }`;
    const subject = `Get in touch - ${name}`;
    if (isValidSubmission()) {
      const request = `${emailEndpoint}?name=${fields['name']}&email=${
        fields[fieldNames.EMAIL]
      }&subject=${subject}&body=${fields[fieldNames.MESSAGE]}`;
      axios
        .post(proxyurl + request, axiosConfig)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error;
        });
      return true;
    }
  }
}
