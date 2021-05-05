import React from 'react';
import {
  TextInput,
  TextLabel,
  RedStar,
  StarLabelContainer,
  ErrorText,
  InputFieldWrapper,
  Icon,
} from './TextInputField.style';
import { icons } from '../../style/icons';

export default function TextInputField({
  id,
  label,
  onChange,
  required,
  showError,
  isAdd,
  hasIcon,
  ...inputProps
}) {
  return (
    <InputFieldWrapper>
      <StarLabelContainer>
        <TextLabel htmlFor={id} required={required}>
          {label}
        </TextLabel>
        {required && (
          <RedStar src={icons.RED_STAR} alt="red star for required fields" />
        )}
      </StarLabelContainer>
      <TextInput
        type="text"
        name={id}
        showError={showError}
        onChange={(e) => onChange(e.target.value)}
        {...inputProps}
      />
      {isAdd && hasIcon && <Icon src={icons.ADD_ICON} />}
      {!isAdd && hasIcon && <Icon src={icons.DELETE_ICON} />}
      <ErrorText>{showError}</ErrorText>
    </InputFieldWrapper>
  );
}
