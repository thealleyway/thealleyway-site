import { InputBox } from './TextInputBox.styles';
export default function TextInputBox({ placeholder, onChange }) {
  return <InputBox onChange={onChange} placeholder={placeholder} />;
}
