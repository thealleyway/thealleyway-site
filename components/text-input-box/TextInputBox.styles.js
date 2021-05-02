import styled from 'styled-components';
import { colors } from '../../style/colors';
import { fonts, fontWeights, P } from '../../style/typography';

const InputBoxLabel = styled(P)`
  color: ${colors.BROWN};
  font-size: .8em;
  margin-bottom: .5em;
`;

const StarLabelContainer = styled.div`
  display: flex;
`;

const RedStar = styled.img`
  width: 2%;
  margin-left: 0.5em;
`;



const ErrorText = styled(P)`
  position: absolute;
  color: ${colors.RED};
  font-size: 0.7em;
  margin: .5em 0 -1em 0;
  letter-spacing: .07em;
  font-weight: ${fontWeights.medium};
`;

const InputBox = styled.textarea`
  background-color: ${colors.CREME};
  width: 100%;
  height: ${(props) =>
    props.height ? props.height : `clamp(16em, 4vw, 26em)`};
  border: ${(props) => props.showError ? `1px solid ${colors.RED}` : `1px solid ${colors.BROWN}`};
  &:focus {
    outline: none;
  }
  color: ${colors.BLACK};
  font-family: ${fonts.poppins};
  font-weight: ${fontWeights.normal};
  font-size: 1em;
  ::placeholder {
    color: ${colors.BROWN};
    font-family: ${fonts.poppins};
    font-weight: ${fontWeights.normal};
  }
  padding: 0.5em;
`;

export { InputBox, InputBoxLabel, StarLabelContainer, RedStar, ErrorText };