import { P } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import { max } from '../../lib/responsive';

const Button = styled(P).attrs({
  as: 'button',
})`
  background-color: ${colors.CREME};
  color: ${colors.MAUVE};
  border: 2px solid ${colors.MAUVE};
  border-radius: 240%;
  width: 120px;
  height: 48px;
  text-align: center;
  letter-spacing: 0.13em;

  transition: background-color 0.3s linear;
  -moz-transition: background-color 0.3s linear;
  -webkit-transition: background-color 0.3s linear;
  -ms-transition: background-color 0.3s linear;

  &:hover {
    background-color: ${colors.MAUVE};
    color: ${colors.WHITE};
    cursor: pointer;
  }

  @media ${max.tabletSm} {
    align-self: center;
  }

  @media ${max.tabletLg} {
    width: 30%;
  }
`;

export { Button };
