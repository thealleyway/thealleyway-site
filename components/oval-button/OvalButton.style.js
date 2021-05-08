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
