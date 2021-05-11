import styled from 'styled-components';
import { min } from '../../../lib/responsive';
import { motion } from 'framer-motion';

const LongLinesDesktop = styled(motion.img)`
  display: none;
@media ${min.desktop} {
  display: block;
  position: relative;
  width: 11.2em;
  margin: 0 0 0 5.8em;
}
`;

const LongLinesTablet = styled(motion.img)`
@media ${min.tablet} {
  display: block;
  position: relative;
  width: 7em;
  margin: 0 0 0 0.9em;
}
@media ${min.desktop} {
  display: none;
}
`;

export { 
    LongLinesDesktop,
    LongLinesTablet
}