import React from 'react';
import {
  TextInput,
  TextLabel,
  RedStar,
  StarLabelContainer,
  ErrorText,
  InputFieldWrapper,
  AddIcon,
  DeleteIcon,
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
  addResource,
  deleteResource,
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
      {isAdd && hasIcon && <AddIcon src={icons.ADD_ICON} onClick={addResource} />}
      {!isAdd && hasIcon && <DeleteIcon src={icons.DELETE_ICON} onClick={deleteResource} />}
      <ErrorText>{showError}</ErrorText>
    </InputFieldWrapper>
  );
}
