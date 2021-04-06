import React from 'react';
import { TextInput, TextLabel } from './TextInputField.style';

export default function TextInputField({ label, onChange }) {
  return (
    <>
      <TextLabel>{label}</TextLabel>
      <TextInput type="text" onChange={(e) => onChange(e.target.value)} />
    </>
  );
}
