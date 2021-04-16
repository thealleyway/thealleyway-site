import styled from 'styled-components';
import { min, max } from '../../../lib/responsive';
import { colors } from '../../../style/colors';
import { P, H2 } from '../../../style/typography';
const PopupBox = styled.div`
  border: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 5;
  @media ${min.mobile} {
    top: 25%;
  }
  @media ${min.tablet} {
    top: 30%;
  }
  @media ${min.desktop} {
    top: 24%;
    left: 1em;
  }
  @media ${min.desktopLg} {
    top: 0;
  }
`;

const Box = styled.div`
  background: ${colors.CREME};
  position: relative;
  margin: 0 auto;
  border: 0.15em solid black;
  overflow: auto;
  @media ${min.mobile} {
    height: 23em;
    padding: 1em;
    width: 80%;
  }
  @media ${min.tablet} {
    height: 19em;
  }
  @media ${min.desktop} {
    padding: 20px;
    width: 55%;
  }
  @media ${min.desktopLg} {
    top: 33%;
  }
`;

const TextContent = styled.div`
  @media ${min.mobile} {
    width: 20em;
    padding: 1em;
    margin-top: -2em;
  }
  @media ${min.tablet} {
    width: 60%;
    padding: 0 0 0 2em;
    margin-top: 3em;
  }
  @media ${min.desktop} {
    width: 50%;
    margin-left: 1em;
    font-size: 0.9em;
  }
`;

const H2Styled = styled(H2)`
  @media ${min.mobile} {
    font-size: clamp(2.3em, 8vw, 2.5em);
  }
  @media ${min.tablet} {
    font-size: 2.6em;
  }
  @media ${min.desktop} {
    font-size: 3em;
  }
`;

const PStyled = styled(P)`
  @media ${min.mobile} {
    margin-top: -1em;
  }
`;

const ImgBackground = styled.img`
  opacity: 10%;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  width: 66%;
  height: 100%;
`;

const Img = styled.img`
  object-fit: cover;
  position: absolute;
  @media ${min.mobile} {
    bottom: 2.5em;
    width: 9em;
    height: 8em;
  }
  @media ${max.tablet} {
    left: 2em;
  }
  @media ${min.tablet} {
    top: 4.5em;
    right: 3em;
    width: 10.5em;
    height: 10.5em;
    margin-top: -1em;
    margin-right: 2em;
  }
  @media ${min.desktop} {
    top: 5em;
    right: 5em;
  }
`;

const X = styled.img`
  position: absolute;
  border: none;
  top: 1em;
  right: 1em;
  @media ${min.mobile} {
    width: 1.6em;
  }
  @media ${min.desktop} {
    width: 1.3em;
  }
`;

export { PopupBox, Box, TextContent, ImgBackground, Img, X, H2Styled, PStyled };
