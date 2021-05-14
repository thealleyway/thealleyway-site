import styled from 'styled-components';
import { max } from '../../../lib/responsive';
import { motion } from 'framer-motion';

export const ImageWithFadedBackgroundWrapper = styled.div`
  width: 50em;
  height 100%;
  padding: 4em;
  position: relative;

  @media ${max.tabletLg} {
    height: 80vh;
    width: 100%;
  }

  @media ${max.tabletSm} {
    height: 80vh;
    padding: 2em;
  }
`;

const imagePadding = 'var(--image-padding)';

export const Image = styled(motion.img)`
  height: 70%;
  width: auto;
  position: absolute;
  object-fit: cover;

  --image-padding: 4em;
  top: ${(props) => props.top && imagePadding};
  left: ${(props) => props.left && imagePadding};
  bottom: ${(props) => !props.top && imagePadding};
  right: ${(props) => !props.left && imagePadding};

  @media ${max.tabletLg} {
    width: 60%;
  }

  @media ${max.tabletSm} {
    --image-padding: 2em;
    width: 70%;
  }
`;

export const FadedImage = styled(motion.img)`
  height: 70%;
  width: auto;
  object-fit: cover;
  position: absolute;
  opacity: 0.15;

  --image-padding: 4em;
  top: ${(props) => !props.top && imagePadding};
  left: ${(props) => !props.left && imagePadding};
  bottom: ${(props) => props.top && imagePadding};
  right: ${(props) => props.left && imagePadding};

  @media ${max.tabletLg} {
    width: 40%;
  }

  @media ${max.tablet} {
    height: auto;
  }

  @media ${max.tabletSm} {
    --image-padding: 2em;
    width: 50%;
  }
`;
