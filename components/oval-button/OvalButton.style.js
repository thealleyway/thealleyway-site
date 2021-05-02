import { P } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import { fontWeights } from '../../style/typography';
import { max } from '../../lib/responsive';

const Button = styled.a.attrs({
  as: 'button',
})`
  background-color: ${colors.CREME};
  color: ${colors.MAUVE};
  border: 2px solid ${colors.MAUVE};
  border-radius: 240%;
  width: clamp(7.5em, 10vw, 8em);
  height: 3.8em;

  &:hover {
    background-color: ${colors.MAUVE};
    color: ${colors.WHITE};
    cursor: pointer;
  }

  @media ${max.tabletLg} {
    height: 3.5em;
  }

  @media ${max.tabletSm} {
    width: 10em;
    height: 4em;
  }
`;

const ButtonText = styled(P)`
  margin: 0;
  letter-spacing: 0.25em;
  ${Button}:hover & {
    font-weight: ${fontWeights.bold};
  }

  @media ${max.tabletSm} {
    font-size: 1.2em;
  }
`;

export { Button, ButtonText };
