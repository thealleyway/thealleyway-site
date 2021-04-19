import React from 'react';
import { TextInput, TextLabel } from './TextInputField.style';

export default function TextInputField({ id, label, onChange, ...inputProps }) {
  return (
    <div>
      <TextLabel for={id}>{label}</TextLabel>
      <TextLabel htmlFor={id}>{label}</TextLabel>
      <TextInput
        type="text"
        name={id}
        onChange={(e) => onChange(e.target.value)}
        {...inputProps}
      />
    </div>
  );
}
