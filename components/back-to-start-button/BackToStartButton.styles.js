import { P } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import { min } from '../../lib/responsive';

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
  @media ${min.tablet} {
    letter-spacing: 0.1em;
  }
  @media ${min.desktop} {
    letter-spacing: 0.2em;
  }
  width: ${(props) => props.showHorizontal && '12em'};
`;

export { Button, ButtonText, ButtonImage };
