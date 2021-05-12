import styled from 'styled-components';
import { max } from '../../../lib/responsive';

export const FullSizeImage = styled.img`
  padding: 4em;
  height: 100%;
  width: auto;
  object-fit: cover;

  @media ${max.tabletLg} {
    width: 100%;
    height: auto;
  }

  @media ${max.tabletSm} {
    padding: 2em;
  }
`;
