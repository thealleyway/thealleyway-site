import styled from 'styled-components';
import { min } from '../../lib/responsive';

const BottomImageContainer = styled.div`
  position: absolute;
`;

const ImageBoxLinkContainer = styled.div`
  position: relative;
  padding-top: 10em;
  display: flex;
  justify-content: center;
`;

const BoxLinkContainer = styled.div`
  position: absolute;
  margin: 3.8em 0 0 0;
  @media ${min.tablet} {
    margin: 3em 0 0 15em;
  }
  @media ${min.desktop} {
    margin: 1em 0 0 40em;
  }
`;

const BottomImage = styled.img`
  opacity: 10%;
  object-fit: cover;
  height: 30em;
  width: 100%;
  @media ${min.tablet} {
    height: 32em;
    width: 100vw;
  }
  @media ${min.desktop} {
    height: 28em;
  }
`;

export {
  BottomImageContainer,
  BottomImage,
  ImageBoxLinkContainer,
  BoxLinkContainer,
};
