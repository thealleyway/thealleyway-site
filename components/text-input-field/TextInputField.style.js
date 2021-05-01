import styled from 'styled-components';
import { P } from '../../style/typography';
import { colors } from '../../style/colors';

const TextLabel = styled(P)`
  color: ${colors.BROWN};
  display: block;
  margin: 0;
`;

const ErrorText = styled(P)`
  color: red;
  font-size: 0.7em;
  margin: 0.5em 0 -1em 0;
`;

const RedStar = styled.img`
  width: 2%;
  margin-left: 0.5em;
`;

const StarLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextInput = styled(P).attrs({
  as: 'input',
})`
  display: block;
  border: none;
  background-color: ${colors.CREME};
  border-bottom: ${(props) =>
    props.showError ? `1px solid red` : `1px solid ${colors.BROWN}`};
  width: 100%;
  border-radius: 0%;
  &:focus {
    outline: none;
  }
`;

export { TextLabel, TextInput, RedStar, StarLabelContainer, ErrorText };
