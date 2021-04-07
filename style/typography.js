import styled from 'styled-components';
import { min } from '../lib/responsive';
import { colors } from './colors';
const fonts = {
  swearDisplay: 'swear-display, serif',
  poppins: 'poppins, sans-serif',
};

const fontSizes = {
  h2: 'clamp(5em, 10vw, 8em)',
  h3: 'clamp(3em, 5vw, 4em)',
};

const fontStyles = {
  italic: 'italic',
};

const fontWeights = {
  normal: `400`,
  medium: `600`,
  bold: `650`,
};

const H1 = styled.h1`
  font-family: ${fonts.swearDisplay};
  font-weight: ${fontWeights.medium};
  color: ${colors.BURNTORANGE};
  font-size: 13em;
  @media ${min.tablet} {
    font-size: 10.5em;
  }
  @media ${min.desktop} {
    font-size: 10em;
  }
`;

const H2 = styled.h2`
  font-size: ${fontSizes.h2};
  font-family: ${fonts.swearDisplay};
  font-weight: ${fontWeights.medium};
`;

const H3 = styled.h3`
  font-size: ${fontSizes.h3};
  font-family: ${fonts.poppins};
  font-style: ${fontStyles.italic};
  font-weight: ${fontWeights.medium};
`;

const P = styled.p`
  font-family: ${fonts.poppins};
  font-weight: ${fontWeights.regular};
  font-size: 2.2em;
  @media ${min.tablet} {
    font-size: 1.6em;
  }
  @media ${min.desktop} {
    font-size: 1em;
  }
`;

export { H1, H2, H3, P };
