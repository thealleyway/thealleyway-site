import { InputBox } from './TextInputBox.styles';

export default function TextInputBox({ placeholder, onChange, height }) {
  return <InputBox onChange={onChange} placeholder={placeholder} height={height}/>;
}
