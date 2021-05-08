import { Button, ButtonText, OvalButtonContainer } from './OvalButton.style';

export default function OvalButton({ buttonText, onClick }) {
  return (
    <OvalButtonContainer
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <Button onClick={onClick}>
        <ButtonText>{buttonText}</ButtonText>
      </Button>
    </OvalButtonContainer>
  );
}
