import { InputBox, InputBoxLabel, StarLabelContainer, ErrorText, RedStar } from './TextInputBox.styles';
import { getString } from '../../lib/richText';
import { icons } from '../../style/icons';

export default function TextInputBox({ placeholder, onChange, height, label, required, showError }) {
  return (
    <>
      <StarLabelContainer>
        <InputBoxLabel>{label}</InputBoxLabel>
        {required && <RedStar src={icons.RED_STAR} />}
      </StarLabelContainer>
      <InputBox onChange={onChange} placeholder={placeholder} height={height} showError={true} />
      {true &&
        <ErrorText>
          FIELD IS REQUIRED!
          </ErrorText>}
    </>
  );
}
