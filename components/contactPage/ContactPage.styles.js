import styled from 'styled-components';
import { min } from '../../lib/responsive';

const HeaderAndSquiggleContainer = styled.div`
  @media ${min.tablet} {
    padding-bottom: 1em;
  }
`;

const PageContainer = styled.div`
  position: relative;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -2em;
`;

const BackToStartButtonContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 10em;
  @media ${min.mobile} {
    bottom: -42em;
  }
  @media ${min.tablet} {
    bottom: -43.5em;
  }
`;

const BottomImageContainer = styled.div`
  position: absolute;
`;

const ImageBoxLinkContainer = styled.div`
  position: relative;
  padding-top: 10em;
  display: flex;
  @media ${min.mobile} {
    justify-content: center;
  }
`;

const BoxLinkContainer = styled.div`
  position: absolute;
  @media ${min.mobile} {
    margin: 3.8em 0 0 0;
  }
  @media ${min.tablet} {
    margin: 3em 0 0 15em;
  }
  @media ${min.desktop} {
    margin: 1em 0 0 40em;
  }
`;

const SquiggleUnderline = styled.img`
  position: absolute;
  @media ${min.mobile} {
    width: clamp(16em, 80vw, 21em);
    margin: 2em 0 0 2.5em;
  }
  @media ${min.tablet} {
    width: 26em;
    margin: -1em 0 0 10em;
  }
  @media ${min.desktop} {
    width: 25em;
    margin: 0.6em 0 0 12.6em;
  }
`;

const BottomImage = styled.img`
  opacity: 10%;
  object-fit: cover;
  @media ${min.mobile} {
    height: 30em;
    width: 100%;
  }
  @media ${min.tablet} {
    height: 32em;
    width: 100vw;
  }
  @media ${min.desktop} {
    height: 28em;
  }
`;

export {
  SquiggleUnderline,
  BottomImageContainer,
  HeaderAndSquiggleContainer,
  PageContainer,
  BottomImage,
  ImageBoxLinkContainer,
  BoxLinkContainer,
  BackToStartButtonContainer,
  FormContainer,
};
