import styled from 'styled-components';
import { max } from '../../../lib/responsive';

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

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
  object-fit: cover;
  z-index: 1;

  @media ${max.tabletLg} {
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
  object-fit: cover;
  z-index: 1;

  @media ${max.tabletLg} {
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
  width: 30em;
  object-fit: cover;
  z-index: 1;

  @media ${max.tabletLg} {
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
