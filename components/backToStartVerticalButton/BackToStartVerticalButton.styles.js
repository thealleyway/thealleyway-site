import { P } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import { min } from '../../lib/responsive';

const UnfilledButtonImage = styled.img`
  @media ${min.desktop} {
    width: 42%;
  }
`;

const FilledButtonImage = styled.img`
  @media ${min.mobile} {
    width: 90%;
  }
  @media ${min.tablet} {
    width: 70%;
  }
  @media ${min.desktop} {
    width: 42%;
  }
`;

const Button = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  overflow: hidden;
  position: absolute;
  outline: none;
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

export { Button, ButtonText, UnfilledButtonImage, FilledButtonImage };
