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
  biggerStar,
  ...inputProps
}) {
  return (
    <InputFieldWrapper>
      <StarLabelContainer>
        <TextLabel htmlFor={id} required={required}>
          {label}
        </TextLabel>
        {required && (
          <RedStar
            src={icons.RED_STAR}
            alt="red star for required fields"
            biggerStar={biggerStar}
          />
        )}
      </StarLabelContainer>
      <TextInput
        type="text"
        name={id}
        showError={showError}
        onChange={onChange}
        value={value}
        {...inputProps}
      />
      {isAdd && hasIcon && (
        <AddIcon
          src={icons.ADD_ICON}
          onClick={addResource}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      )}
      {!isAdd && hasIcon && (
        <DeleteIcon
          src={icons.DELETE_ICON}
          onClick={deleteResource}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      )}
      <ErrorText>{showError}</ErrorText>
    </InputFieldWrapper>
  );
}
