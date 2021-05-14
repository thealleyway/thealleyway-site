import styled from 'styled-components';
import { max } from '../../../lib/responsive';
import { motion } from 'framer-motion';

export const TwoImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: 30em;
  flex-direction column;
  padding: 4em;
  @media ${max.tabletLg} {
    flex-direction row;
  }
  @media ${max.tabletSm} {
    flex-direction column;
    padding: 2em;
  }
`;

export const Image = styled(motion.img)`
  height: 46%;
  width: auto;
  object-fit: cover;

  @media ${max.tabletLg} {
    width: 48%;
    height: auto;
  }

  @media ${max.tabletSm} {
    width: 100%;
    padding-bottom: 2em;
  }
`;
