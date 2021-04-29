import styled from 'styled-components';
import { P } from '../../style/typography';
import { colors } from '../../style/colors';

const TextLabel = styled(P)`
  color: ${colors.BROWN};
  display: block;
  margin: 0;
  padding-left: ${(props) => (props.required ? 0 : `2em`)};
`;

const StarContainer = styled.div`
  display: flex;
`;

const RedStar = styled.img`
  padding-right: 1.3em;
`;

const TextInput = styled(P).attrs({
  as: 'input',
})`
  display: block;
  border: none;
  background-color: ${colors.CREME};
  border-bottom: 1px solid ${colors.BROWN};
  width: 100%;
  margin-left: 2.2em;
  &:focus {
    outline: none;
  }
`;

export { TextLabel, TextInput, RedStar, StarContainer };
