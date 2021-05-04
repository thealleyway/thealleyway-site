import styled from 'styled-components';
import { P, fontWeights } from '../../style/typography';
import { colors } from '../../style/colors';

const TextLabel = styled(P)`
  color: ${colors.BROWN};
  display: block;
  margin: 0;
  font-size: 0.8em;
`;

const ErrorText = styled(P)`
  color: ${colors.RED};
  font-size: 0.7em;
  margin: 0.5em 0 -1em 0;
  letter-spacing: 0.07em;
  font-weight: ${fontWeights.medium};
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
    props.showError ? `1px solid ${colors.RED}` : `1px solid ${colors.BROWN}`};
  width: 100%;
  border-radius: 0%;
  &:focus {
    outline: none;
  }
`;

const Icon = styled.img`
  margin: -2.6em 0 0 25.8em;
  width: 2.3em;
  float: right;
`;

export { TextLabel, TextInput, RedStar, StarLabelContainer, ErrorText, Icon };
