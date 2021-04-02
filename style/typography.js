import styled from 'styled-components';
const fonts = {
  swearDisplay: 'swear-display, serif',
  poppins: 'poppins, sans-serif',
};

const fontSizes = {
  h1: 'clamp(2.5em, 8vw, 8em)',
  h2: 'clamp(1.8em, 5vw, 6em)',
  h3: 'clamp(1em, 2.5vw, 3em)',
  p: 'clamp(.6em, 1.5vw, 2em)',
};

const fontStyles = {
  italic: 'italic',
};

const fontWeights = {
  normal: `400px`,
  medium: `700px`,
  bold: `900px`,
};

const H1 = styled.h1`
  font-size: ${fontSizes.h1};
  font-family: ${fonts.swearDisplay};
  font-style: ${fontStyles.italic};
  font-weight: ${fontWeights.bold};
`;

const H2 = styled.h2`
  font-size: ${fontSizes.h2};
  font-family: ${fonts.swearDisplay};
  font-style: ${fontStyles.italic};
  font-weight: ${fontWeights.bold};
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

export { H1, H2, H3, P };
