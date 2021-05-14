import styled from 'styled-components';
import { max } from '../../../lib/responsive';
import { motion } from 'framer-motion';

export const ImageWrapper = styled.div`
  height: 100vh;
  width: 35em;
`;

export const FullSizeImage = styled(motion.img)`
  padding: 4em;
  height: 100%;
  object-fit: cover;
  @media ${max.tabletLg} {
    width: 100%;
    height: auto;
  }

  @media ${max.tabletSm} {
    padding: 2em;
  }
`;
