import React from 'react';
import { TextInput, TextLabel } from './TextInputField.style';

export default function TextInputField({ id, label, onChange, ...inputProps }) {
  return (
    <>
      <TextLabel htmlFor={id}>{label}</TextLabel>
      <TextInput
        type="text"
        name={id}
        onChange={(e) => onChange(e.target.value)}
        {...inputProps}
      />
    </>
  );
}
