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

const LongLinesFlippedDesktop = styled(motion.img)`
  display: none;
@media ${min.desktop} {
  display: block;
  position: relative;
  width: 11.2em;
  margin: -32em 0 0 4.8em;
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

const LongLinesFlippedTablet = styled(LongLinesTablet)`
margin: -27em 0 0 0.3em;
`;

const LongLinesContainer = styled(motion.div)`
  position: absolute;
  display: none;
@media ${min.tablet} {
  display: block;
  margin: 30em 0 0 0;
}
@media ${min.desktop} {
  margin: 32.5em 0 0 0;
}
`;

export { 
    LongLinesDesktop,
    LongLinesFlippedDesktop,
    LongLinesTablet,
    LongLinesFlippedTablet,
    LongLinesContainer
}