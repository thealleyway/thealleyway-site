import styled from 'styled-components';
import { max } from '../../../lib/responsive';
import { motion } from 'framer-motion';
import {
  FadeIn,
  FadeOut,
} from '../../animation-base-components/AnimationBaseComponents';

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  width: 30em;

  @media ${max.tabletLg} {
    height: 50vh;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
  }
`;

export const GalleryImage1 = styled.img`
  padding: 2em;
  width: 30em;
  height: 40vh;
  object-fit: cover;
  animation: ${(props) => (props.fadeIn ? FadeIn : FadeOut)};
  animation-duration: ${(props) => (props.fadeIn ? '3s' : '2s')};

  @media ${max.tabletLg} {
    z-index: 1;
    padding: 2%;
    width: 50%;
    position: absolute;
    left: -25%;
  }

  @media ${max.tabletSm} {
    display: none;
  }

  animation: ${(props) => (props.fadeIn ? FadeIn : FadeOut)} forwards;
  animation-duration: ${(props) => (props.fadeIn ? `0.5s` : '3s')};
`;

export const GalleryImage2 = styled.img`
  padding: 2em;
  width: 30em;
  height: 100vh;
  object-fit: cover;
  animation: ${(props) => (props.fadeIn ? FadeIn : FadeOut)};
  animation-duration: ${(props) => (props.fadeIn ? '3s' : '2s')};

  @media ${max.tabletLg} {
    z-index: 1;
    padding: 2%;
    height: 40vh;
    width: 50%;
  }

  @media ${max.tabletSm} {
    padding: 4%;
    width: 80%;
  }

  animation: ${(props) => (props.fadeIn ? FadeIn : FadeOut)} forwards;
  animation-duration: ${(props) => (props.fadeIn ? `1.8s` : '1.8s')};
`;

export const GalleryImage3 = styled.img`
  padding: 2em;
  padding-bottom: 0;
  width: 30em;
  height: 30vh;
  object-fit: cover;
  animation: ${(props) => (props.fadeIn ? FadeIn : FadeOut)};
  animation-duration: ${(props) => (props.fadeIn ? '3s' : '2s')};

  @media ${max.tabletLg} {
    z-index: 1;
    padding: 2%;
    width: 50%;
    height: 40vh;
    position: absolute;
    right: -25%;
  }

  @media ${max.tabletSm} {
    display: none;
  }

  animation: ${(props) => (props.fadeIn ? FadeIn : FadeOut)} forwards;
  animation-duration: ${(props) => (props.fadeIn ? `3s` : '0.5s')};
`;

export const FadedImage1 = styled(motion.img)`
  object-fit: cover;
  position: absolute;
  top: 25%;
  opacity: 0.15;
  z-index: -1;
  width: 30%;

  @media ${max.tabletLg} {
    z-index: 0;
    left: 10%;
    top: 0;
  }
`;

export const FadedImage2 = styled(motion.img)`
  object-fit: cover;
  position: absolute;
  bottom: 25%;
  right: 0;
  opacity: 0.15;
  z-index: -1;
  width: 30%;

  @media ${max.tabletLg} {
    z-index: 0;
    right: 10%;
    bottom: 0;
  }
`;
