import TextInputField from '../../text-input-field/TextInputField';
import TextInputBox from '../../text-input-box/TextInputBox';
import SquareButton from '../../square-button/SquareButton';
import {
  ContactFormContainer,
  InputFieldWrapper,
  InputBoxWrapper,
  ButtonWrapper,
} from './ContactForm.styles';

export default function ContactForm({ togglePopup }) {
  return (
    <>
      <ContactFormContainer>
        <InputFieldWrapper>
          <TextInputField
            id="firstName"
            label="First Name"
            required
            showError={true}
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField id="lastName" label="Last Name" />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField id="email" label="Email" required showError={true} />
        </InputFieldWrapper>
        <InputBoxWrapper>
          <TextInputBox
            placeholder="Message"
            label="Message"
            showError={true}
            required
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
