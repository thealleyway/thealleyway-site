import {
  InputBox,
  InputBoxLabel,
  StarLabelContainer,
  ErrorText,
} from './TextInputBox.styles';
import { RedStar } from '../base-components/BaseComponents';
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
        {required && <RedStar src={icons.RED_STAR} box/>}
      </StarLabelContainer>
      <InputBox
        onChange={onChange}
        height={height}
        showError={showError}
        id="area"
      />
      <ErrorText>{showError}</ErrorText>
    </>
  );
}
