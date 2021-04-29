import styled from 'styled-components';
import { P } from '../../style/typography';
import { colors } from '../../style/colors';

const TextLabel = styled(P)`
  color: ${colors.BROWN};
  display: block;
  margin: 0;
`;

const TextInput = styled(P).attrs({
  as: 'input',
})`
  display: block;
  border: none;
  background-color: ${colors.CREME};
  border-bottom: 1px solid ${colors.BROWN};
  width: 100%;
  border-radius: 0%;

  &:focus {
    outline: none;
  }
`;

export { TextLabel, TextInput };
