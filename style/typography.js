import styled from 'styled-components';
const fonts = {
  swearDisplay: 'swear-display, serif',
  poppins: 'poppins, sans-serif',
};

const fontSizes = {
  h1: 'clamp(96px, 20vw, 180px)',
  h2: 'clamp(34px, 10vw, 48px)',
  h3: 'clamp(14px, 2.5vw, 16px)',
  p: 'clamp(14px, 1.2vw, 16px)',
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
  font-size: ${fontSizes.h1};
  font-family: ${fonts.swearDisplay};
  font-style: ${fontStyles.italic};
  font-weight: ${fontWeights.medium};
`;

const H1Regular = styled.h1`
  font-size: ${fontSizes.h1};
  font-family: ${fonts.swearDisplay};
  font-weight: ${fontWeights.medium};
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
  font-size: ${fontSizes.p};
  font-family: ${fonts.poppins};
  font-weight: ${fontWeights.regular};
`;

export { H1, H2, H3, P, H1Regular };
