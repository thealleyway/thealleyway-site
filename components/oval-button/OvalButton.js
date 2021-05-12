import { Button, OvalButtonContainer } from './OvalButton.style';

export default function OvalButton({ buttonText, onClick, href }) {
  const onClickFn = onClick ? onClick : () => window.open(href, '_blank');
  return (
    <OvalButtonContainer
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <Button onClick={onClickFn} href={href} rel="noreferrer">
        {buttonText}
      </Button>
    </OvalButtonContainer>
  );
}
