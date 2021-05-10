import { Button, ButtonText } from './OvalButton.style';

export default function OvalButton({ buttonText, onClick, href }) {
  const onClickFn = onClick ? onClick : () => window.open(href, '_blank');
  return (
    <Button onClick={onClickFn} href={href} rel="noreferrer">
      <ButtonText>{buttonText}</ButtonText>
    </Button>
  );
}
