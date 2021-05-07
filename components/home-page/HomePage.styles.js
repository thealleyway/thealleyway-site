import styled from 'styled-components';
import { max, min } from '../../lib/responsive';

export const AlleywayLogo = styled.img`
@media ${min.tabletSm} {
  width: 100%;
  margin: 5em 0 2em 0;
}
@media ${min.tablet} {
  margin: 1em 0 1em 0;
}
@media ${min.desktop} {
  width: 95%;
  margin: -3.5em 0 -2em .8em;
}
`;

export const HomePageIntroContainer = styled.div`
  @media ${min.desktop} {
    width: 100%;
    max-width: 1050px;
  }
`;

export const HomePageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 2em;
`;

export const FeaturedStoryPreviews = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.alreadyHovered ? ` 95%` : `100%`};
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
