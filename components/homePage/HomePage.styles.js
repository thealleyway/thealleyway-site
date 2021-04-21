import styled from 'styled-components';
import { max } from '../../lib/responsive';

export const HomePageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FeaturedStoryPreviews = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  max-width: 1050px;
  padding: min(7%, 80px);
  padding-top: 0px;

  @media ${max.tabletSm} {
    padding-top: 10%;
    align-items: center;
    flex-direction: column;
  }
`;

export const SignatureImage = styled.img`
  width: 60%;
  position: absolute;
  left: 20%;
  bottom: 10%;
  z-index: 2;
  cursor: pointer;

  @media ${max.tabletSm} {
    width: 50%;
    left: 5%;
    bottom: 5%;
  }
`;
