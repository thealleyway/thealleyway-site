import { Button, ButtonText } from './SquareButton.styles';

export default function SquareButton({ buttonText, onClick }) {
  return (
    <Button onClick={onClick}>
      <ButtonText>{buttonText}</ButtonText>
    </Button>
  );
}
