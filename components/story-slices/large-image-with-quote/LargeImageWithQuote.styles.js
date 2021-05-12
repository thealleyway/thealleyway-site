import styled from 'styled-components';
import { max } from '../../../lib/responsive';
import { fonts, fontWeights } from '../../../style/typography';
import { colors } from '../../../style/colors';

export const LargeImageWithQuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4em;
  height: 100%;

  @media ${max.tabletLg} {
    width: 100%;
  }

  @media ${max.tabletSm} {
    padding: 2em;
  }
`;

export const LargeImage = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;

  @media ${max.tabletLg} {
    width: 100%;
    height: auto;
  }
`;

export const Quote = styled.h2`
  font-family: ${fonts.swearDisplay};
  font-weight: ${fontWeights.medium};
  font-size: 2em;
  color: ${colors.NIGHTSKY};
  width: 60%;

  @media ${max.tabletLg} {
    width: 100%;
    font-size: clamp(1.5em, 6vw, 2em);
  }
`;
