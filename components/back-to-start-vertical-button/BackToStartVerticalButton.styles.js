import { P } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import { min } from '../../lib/responsive';

const ButtonImage = styled.img`
  width: 4.5em;

  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.a`
  text-align: center;
  position: absolute;
  margin-bottom: 2em;
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
`;

export { Button, ButtonText, ButtonImage };
