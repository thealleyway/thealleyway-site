import { P } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';

const ButtonImage = styled.img`
  width: 4.5em;
  transform: ${(props) =>
    props.showHorizontal ? 'rotate(270deg)' : 'rotate(0deg)'};
  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.a`
  display: flex;
  flex-direction: ${(props) => (props.showHorizontal ? 'row' : 'column')};
  align-items: center;
`;

const ButtonText = styled(P)`
  color: ${colors.BROWN};
  margin: 0;
  letter-spacing: 0.13em;
  width: ${(props) => props.showHorizontal && '12em'};
  padding-left: ${(props) => props.showHorizontal && '1em'};
`;

export { Button, ButtonText, ButtonImage };
