import TextInputField from '../../text-input-field/TextInputField';
import TextInputBox from '../../text-input-box/TextInputBox';
import SquareButton from '../../square-button/SquareButton';
import {
  ContactFormContainer,
  InputFieldWrapper,
  InputBoxWrapper,
  ButtonWrapper,
} from './ContactForm.styles';
import React, { useState } from 'react';

export default function ContactForm({ togglePopup }) {
  const axios = require('axios');
  const emailEndpoint =
    'https://script.google.com/macros/s/AKfycbxXw7fnNjM-imxAYowQZWlPEO-tIT19CbTg2AttcnCkdEfVWHqCUhwgsKgL7QH9adjo/exec';
  const axiosConfig = {
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*',
    },
  };

  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  const isValidSubmission = () => {
    let errors = {};
    let formIsValid = true;
    const validEmail = new RegExp(
      '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );
    if (fields["firstName"] == undefined || fields["firstName"].length < 1) {
      formIsValid = false;
      errors["firstName"] = "FIRST NAME IS REQUIRED";
    }
    if (!validEmail.test(fields["email"])) {
      formIsValid = false;
      errors["email"] = "EMAIL IS REQUIRED";
    }
    if (fields["message"] == undefined || fields["message"].length < 1) {
      formIsValid = false;
      errors["message"] = "MESSAGE IS REQUIRED";
    }
    setErrors(errors);
    return formIsValid;
  }

  return (
    <>
      <ContactFormContainer>
        <InputFieldWrapper>
          <TextInputField
            id="firstName"
            label="First Name"
            required
            showError={errors["firstName"]}
            onChange={(e) => setFields({ ...fields, "firstName": e })}
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField
            id="lastName"
            label="Last Name"
            onChange={(e) => setFields({ ...fields, "lastName": e })}
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField
            id="email"
            label="Email"
            required
            showError={errors["email"]}
            onChange={(e) => setFields({ ...fields, "email": e })}
          />
        </InputFieldWrapper>
        <InputBoxWrapper>
          <TextInputBox
            placeholder="Message"
            label="Message"
            showError={errors["message"]}
            required
            onChange={(e) => setFields({ ...fields, "message": e.target.value })}
          />
        </InputBoxWrapper>
        <ButtonWrapper>
          <SquareButton
            aria-label="Submission Button"
            buttonText="SUBMIT"
            onClick={() => {
              if (submitRequest()) {
                document.body.style.overflow = 'hidden';
                togglePopup();
              }
            }}
          />
        </ButtonWrapper>
      </ContactFormContainer>
    </>
  );
  function submitRequest() {
    const name = `${fields["firstName"]} ${fields["lastName"]}`;
    const subject = `Get in touch - ${name}`;
    if (isValidSubmission()) {
      alert("form submitted");
      const request = `${emailEndpoint}?name=${fields["name"]}&email=${fields["email"]}&subject=${fields["subject"]}&body=${fields["message"]}`;
      return true;
    }
    else {
      alert("form has errors");
    }
    // axios
    //   .post(proxyurl + request, axiosConfig)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
}





