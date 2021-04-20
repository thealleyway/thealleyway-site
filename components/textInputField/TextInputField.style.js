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
  background-color: ${colors.CREME};
  display: block;
  border: none;
  border-bottom: 1px solid ${colors.BROWN};
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export { TextLabel, TextInput };
