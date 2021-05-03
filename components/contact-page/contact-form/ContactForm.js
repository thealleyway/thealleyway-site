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

  const isValidSubmission = () => {
    firstName.length > 0 ? setFirstNameIsValid(true) : setFirstNameIsValid(false);
    message.length > 0 ? setMessageIsValid(true) : setMessageIsValid(false);
  }

  return (
    <>
      <ContactFormContainer>
        <InputFieldWrapper>
          <TextInputField
            id="firstName"
            label="First Name"
            required
            showError={true}
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
          showError={true} 
          onChange={(e) => setEmail(e)}
          />
        </InputFieldWrapper>
        <InputBoxWrapper>
          <TextInputBox
            placeholder="Message"
            label="Message"
            showError={true}
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
            }}
          />
        </ButtonWrapper>
      </ContactFormContainer>
    </>
  );
}
