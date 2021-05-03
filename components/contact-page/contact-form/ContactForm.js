import TextInputField from '../../text-input-field/TextInputField';
import TextInputBox from '../../text-input-box/TextInputBox';
import SquareButton from '../../square-button/SquareButton';
import {
  ContactFormContainer,
  InputFieldWrapper,
  InputBoxWrapper,
  ButtonWrapper,
} from './ContactForm.styles';
import React, {useState} from 'react';

export default function ContactForm({ togglePopup }) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [firstNameIsValid, setFirstNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [messageIsValid, setMessageIsValid] = useState(false);
  const [submittedBefore, setSubmittedBefore] = useState(false);
  const axios = require('axios');
  const emailEndpoint =
  'https://script.google.com/macros/s/AKfycbxXw7fnNjM-imxAYowQZWlPEO-tIT19CbTg2AttcnCkdEfVWHqCUhwgsKgL7QH9adjo/exec';
  const axiosConfig = {
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*',
    },
  };

  const isValidSubmission = () => {
    const validEmail = new RegExp(
      '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );
  //  console.log(firstName, email, message);
    firstName.length > 0 ? setFirstNameIsValid(true) : setFirstNameIsValid(false);
    if (!validEmail.test(email)) {
      setEmailIsValid(false);
    }
    else {
      setEmailIsValid(true);
    }
    message.length > 0 ? setMessageIsValid(true) : setMessageIsValid(false);
    console.log('first name:' + firstNameIsValid + 'email: ' + emailIsValid + 'message: ' + messageIsValid);
    return (firstNameIsValid && emailIsValid && messageIsValid);
  }

  console.log(submittedBefore);

  return (
    <>
      <ContactFormContainer>
        <InputFieldWrapper>
          <TextInputField
            id="firstName"
            label="First Name"
            required
            showError={!firstNameIsValid && submittedBefore}
            onChange={(e) => setFirstName(e)}
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField 
          id="lastName" 
          label="Last Name" 
          onChange={(e) => setLastName(e)}
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField 
          id="email" 
          label="Email" 
          required 
          showError={!emailIsValid && submittedBefore} 
          onChange={(e) => setEmail(e)}
          />
        </InputFieldWrapper>
        <InputBoxWrapper>
          <TextInputBox
            placeholder="Message"
            label="Message"
            showError={!messageIsValid && submittedBefore}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </InputBoxWrapper>
        <ButtonWrapper>
          <SquareButton
            aria-label="Submission Button"
            buttonText="SUBMIT"
            onClick={() => {
              document.body.style.overflow = 'hidden';
              togglePopup();
              submitRequest();
            }}
          />
        </ButtonWrapper>
      </ContactFormContainer>
    </>
  );
  function submitRequest() {
    const name = `${firstName} ${lastName}`;
    const subject = `Get in touch - ${name}`;
    if (isValidSubmission()) {
      const request = `${emailEndpoint}?name=${name}&email=${email}&subject=${subject}&body=${message}`;
    }
    else {
      setSubmittedBefore(true);
      return;
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





