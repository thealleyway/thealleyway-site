import { Button, ButtonText } from './SquareButton.styles';

export default function SquareButton({ buttonText, onClick, long }) {
  return (
    <Button onClick={onClick} long={long} >
      <ButtonText>{buttonText}</ButtonText>
    </Button>
  );
}
