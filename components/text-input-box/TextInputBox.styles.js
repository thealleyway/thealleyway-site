import styled from 'styled-components';
import { colors } from '../../style/colors';
import { fonts, fontWeights, P } from '../../style/typography';

const InputBoxLabel = styled(P)`
  color: ${colors.BROWN};
  font-size: 0.8em;
  margin-bottom: 0.5em;
`;

const StarLabelContainer = styled.div`
  display: flex;
`;

const ErrorText = styled(P)`
  position: absolute;
  color: ${colors.RED};
  font-size: 0.7em;
  margin: 0.1em 0 -1em 0;
  text-shadow: 0.5px 0 #ff0000;
  letter-spacing: 0.13em;
`;

const InputBox = styled.textarea`
  background-color: ${colors.CREME};
  width: 100%;
  height: ${(props) =>
    props.height ? props.height : `clamp(16em, 4vw, 26em)`};
  border: ${(props) =>
    props.showError ? `1px solid ${colors.RED}` : `1px solid ${colors.BROWN}`};
  &:focus {
    outline: none;
  }
  color: ${colors.BLACK};
  font-family: ${fonts.poppins};
  font-weight: ${fontWeights.normal};
  font-size: 1em;
  padding: 0.5em;
  -webkit-appearance: none;
  border-radius: 0px;
`;

export { InputBox, InputBoxLabel, StarLabelContainer, ErrorText };
