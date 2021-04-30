import { P } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import { fontWeights } from '../../style/typography';

const Button = styled.button`
  background-color: ${colors.CREME};
  color: ${colors.MAUVE};
  border: 2px solid ${colors.MAUVE};
  border-radius: 240%;
  width: 9em;
  height: 3.8em;

  &:hover {
    background-color: ${colors.MAUVE};
    color: ${colors.WHITE};
  }
`;

const ButtonText = styled(P)`
  margin: 0;
  letter-spacing: 0.25em;
  ${Button}:hover & {
    font-weight: ${fontWeights.bold};
  }
`;

export { Button, ButtonText };
