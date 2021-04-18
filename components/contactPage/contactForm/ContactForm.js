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
          <TextInputField id="1" label="First Name" />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField id="2" label="Last Name" />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField id="3" label="Email" />
        </InputFieldWrapper>
        <InputBoxWrapper>
          <TextInputBox placeholder="Message" />
        </InputBoxWrapper>
        <ButtonWrapper>
          <SquareButton buttonText="SUBMIT" onClick={togglePopup} />
        </ButtonWrapper>
      </ContactFormContainer>
    </>
  );
}
