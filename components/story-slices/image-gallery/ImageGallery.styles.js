import styled from 'styled-components';
import { max } from '../../../lib/responsive';

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;

  @media ${max.tabletLg} {
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
`;

export const GalleryImage2 = styled.img`
  padding: 2em;
  width: 30em;
  height: 100vh;
  object-fit: cover;

  @media ${max.tabletLg} {
    z-index: 1;
    padding: 2%;
    width: 50%;
  }

  @media ${max.tabletSm} {
    padding: 4%;
    width: 80%;
  }
`;

export const GalleryImage3 = styled.img`
  padding: 2em;
  padding-bottom: 0;
  width: 30em;
  height: 30vh;
  object-fit: cover;

  @media ${max.tabletLg} {
    z-index: 1;
    padding: 2%;
    width: 50%;
    position: absolute;
    right: -25%;
  }

  @media ${max.tabletSm} {
    display: none;
  }
`;

export const FadedImage1 = styled.img`
  object-fit: cover;
  position: absolute;
  top: 25%;
  opacity: 0.15;
  z-index: -1;

  @media ${max.tabletLg} {
    width: 30%;
    z-index: 0;
    left: 10%;
    top: 0;
  }
`;

export const FadedImage2 = styled.img`
  object-fit: cover;
  position: absolute;
  bottom: 25%;
  right: 0;
  opacity: 0.15;
  z-index: -1;

  @media ${max.tabletLg} {
    width: 30%;
    z-index: 0;
    right: 10%;
    bottom: 0;
  }
`;
