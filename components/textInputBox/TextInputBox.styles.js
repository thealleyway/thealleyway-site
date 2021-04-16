import styled from 'styled-components';
import { colors } from '../../style/colors';
import { fonts, fontWeights } from '../../style/typography';
const InputBox = styled.textarea`
  background-color: ${colors.CREME};
  width: 100%;
  height: clamp(16em, 4vw, 26em);
  border: 1px solid ${colors.BROWN};
  &:focus {
    outline: none;
  }
  color: ${colors.BROWN};
  font-family: ${fonts.poppins};
  font-weight: ${fontWeights.regular};
  font-size: 1em;
  ::placeholder {
    color: ${colors.BROWN};
    font-family: ${fonts.poppins};
    font-weight: ${fontWeights.regular};
  }
`;

export { InputBox };
