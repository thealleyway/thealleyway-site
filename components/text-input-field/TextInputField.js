import React from 'react';
import {
  TextInput,
  TextLabel,
  RedStar,
  StarLabelContainer,
} from './TextInputField.style';
import { icons } from '../../style/icons';

export default function TextInputField({
  id,
  label,
  onChange,
  required,
  ...inputProps
}) {
  return (
    <>
      <StarLabelContainer>
        <TextLabel htmlFor={id} required={required}>
          {label}
        </TextLabel>
        {required && <RedStar src={icons.RED_STAR} />}
      </StarLabelContainer>
      <TextInput
        type="text"
        name={id}
        onChange={(e) => onChange(e.target.value)}
        {...inputProps}
      />
    </>
  );
}
