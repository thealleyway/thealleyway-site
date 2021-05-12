import styled from 'styled-components';
import { max } from '../../../lib/responsive';

export const TwoImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  flex-direction column;
  padding: 4em;
  padding-top: calc(5vh + 2em);

  @media ${max.tabletLg} {
    flex-direction row;
  }

  @media ${max.tabletSm} {
    flex-direction column;
    padding: 2em;
  }
`;

export const Image = styled.img`
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
