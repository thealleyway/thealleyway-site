import React from 'react';
import {
  TextInput,
  TextLabel,
  RedStar,
  StarContainer,
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
      <StarContainer>
        {required && <RedStar src={icons.RED_STAR} />}
        <TextLabel htmlFor={id} required={required}>
          {label}
        </TextLabel>
      </StarContainer>
      <TextInput
        type="text"
        name={id}
        onChange={(e) => onChange(e.target.value)}
        {...inputProps}
      />
    </>
  );
}
