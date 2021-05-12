import styled from 'styled-components';
import { min } from '../../../lib/responsive';
import { LongLinesTablet } from '../long-lines/LongLines.styles';
import { motion } from 'framer-motion';

const LongLinesFlippedDesktop = styled(motion.img)`
  display: none;
  @media ${min.desktop} {
    display: block;
    position: relative;
    width: 11.2em;
    margin: -32em 0 0 4.8em;
  }
`;

const LongLinesFlippedTablet = styled(LongLinesTablet)`
  margin: -27em 0 0 0.3em;
`;

export { LongLinesFlippedDesktop, LongLinesFlippedTablet };
