import React from 'react';
import {
  TextInput,
  TextLabel,
  StarLabelContainer,
  ErrorText,
  InputFieldWrapper,
  AddIcon,
  DeleteIcon,
} from './TextInputField.style';
import { RedStar } from '../base-components/BaseComponents';
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
  value,
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
        //       onChange={(e) => onChange(e.target.value)}
        onChange={onChange}
        value={value}
        {...inputProps}
      />
      {isAdd && hasIcon && (
        <AddIcon src={icons.ADD_ICON} onClick={addResource} />
      )}
      {!isAdd && hasIcon && (
        <DeleteIcon src={icons.DELETE_ICON} onClick={deleteResource} />
      )}
      <ErrorText>{showError}</ErrorText>
    </InputFieldWrapper>
  );
}
