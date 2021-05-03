import {
  InputBox,
  InputBoxLabel,
  StarLabelContainer,
  ErrorText,
  RedStar,
} from './TextInputBox.styles';
import { icons } from '../../style/icons';

export default function TextInputBox({
  onChange,
  height,
  label,
  required,
  showError,
}) {
  return (
    <>
      <StarLabelContainer>
        <InputBoxLabel>{label}</InputBoxLabel>
        {required && <RedStar src={icons.RED_STAR} />}
      </StarLabelContainer>
      <InputBox onChange={onChange} height={height} showError={showError} />
      <ErrorText>{showError}</ErrorText>
    </>
  );
}
