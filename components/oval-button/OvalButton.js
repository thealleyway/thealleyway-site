import { Button, ButtonText } from './OvalButton.style';

export default function OvalButton({ buttonText, onClick }) {
  return (
    <Button onClick={onClick}>
      <ButtonText>{buttonText}</ButtonText>
    </Button>
  );
}
