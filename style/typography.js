import styled from 'styled-components';
import { min } from '../lib/responsive';
import { colors } from './colors';
import { motion } from 'framer-motion';

const fonts = {
  swearDisplay: 'swear-display, serif',
  poppins: 'poppins, sans-serif',
};

const fontStyles = {
  italic: 'italic',
};

const fontWeights = {
  normal: 400,
  medium: 600,
  bold: 650,
};

const H1 = styled.h1`
  font-family: ${fonts.swearDisplay};
  font-weight: ${fontWeights.medium};
  color: ${colors.SUNSETORANGE};
  font-size: 6em;
  @media ${min.tablet} {
    font-size: 10.5em;
  }
  @media ${min.desktop} {
    font-size: 10em;
  }
`;

const H2 = styled(motion.h2)`
  font-family: ${fonts.swearDisplay};
  font-weight: ${fontWeights.medium};
  color: ${colors.SUNSETORANGE};
  font-size: 2em;
  @media ${min.tablet} {
    font-size: 2.6em;
  }
`;

const H3 = styled.h3`
  font-size: clamp(1.5em, 6vw, 2em);
  font-family: ${fonts.swearDisplay};
  font-style: ${fontStyles.italic};
  font-weight: ${fontWeights.medium};
`;

const H4 = styled.h3`
  font-family: ${fonts.poppins};
  font-weight: ${fontWeights.medium};
  color: ${colors.STONEPATH};
  letter-spacing: 0.13em;
  font-size: 1em;
`;

const P = styled.p`
  font-family: ${fonts.poppins};
  font-weight: ${fontWeights.normal};
  font-size: 1em;
  line-height: 1.8em;
`;

const InputInfoText = styled(P)`
  color: ${colors.ROSEMAUVE};
  font-size: 0.8em;
  text-transform: lowercase;
  text-align: right;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

export { H1, H2, H3, H4, P, InputInfoText, fontWeights, fonts };
