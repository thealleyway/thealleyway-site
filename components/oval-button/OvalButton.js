import { Button } from './OvalButton.style';

export default function OvalButton({ buttonText, onClick, href }) {
  const onClickFn = onClick ? onClick : () => window.open(href, '_blank');
  return (
    <Button onClick={onClickFn} href={href} rel="noreferrer">
      {buttonText}
    </Button>
  );
}
