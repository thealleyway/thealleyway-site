import TextInputField from '../../textInputField/TextInputField';
import TextInputBox from '../../textInputBox/TextInputBox';
import SquareButton from '../../squareButton/SquareButton';
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
          <TextInputField id="firstName" label="First Name" />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField id="lastName" label="Last Name" />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField id="email" label="Email" />
        </InputFieldWrapper>
        <InputBoxWrapper>
          <TextInputBox placeholder="Message" />
        </InputBoxWrapper>
        <ButtonWrapper>
          <SquareButton
            aria-label="Submission Button"
            buttonText="SUBMIT"
            onClick={togglePopup}
          />
        </ButtonWrapper>
      </ContactFormContainer>
    </>
  );
}
