import styled from 'styled-components';
import { min } from '../../../lib/responsive';
import { motion } from 'framer-motion';

const SideImageStyled = styled(motion.img)`
  object-fit: cover;
  @media ${min.tablet} {
    margin-bottom: 20em;
    width: 8.5em;
    height: 32em;
  }
  @media ${min.desktop} {
    margin-bottom: 15em;
    width: 16em;
    height: 32em;
  }
`;

export { SideImageStyled };
