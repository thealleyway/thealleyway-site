import styled from 'styled-components';
import { min, max } from '../../lib/responsive';
import { colors } from '../../style/colors';
import { P, H2 } from '../../style/typography';
const PopupBox = styled.div`
  border: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 5;
  top: 25%;
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
  border: 0.15em solid ${colors.BLACK};
  overflow: auto;
  height: clamp(21em, 85vw, 23em);
  padding: 1em;
  width: 80%;
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
  width: max(100%, 15em);
  padding: 1em;
  margin-top: -2em;
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
  width: 10em;
  font-size: clamp(1.6em, 8vw, 2.5em);
  @media ${min.tablet} {
    font-size: 2.6em;
  }
  @media ${min.desktop} {
    font-size: 3em;
  }
`;

const PStyled = styled(P)`
  margin-top: -1em;
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
  bottom: 2.5em;
  width: 9em;
  height: 8em;
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

const CloseIcon = styled.img`
  position: absolute;
  border: none;
  top: 1em;
  right: 1em;
  width: clamp(1.3em, 7vw, 1.6em);
  @media ${min.desktop} {
    width: 1.3em;
  }
`;

export {
  PopupBox,
  Box,
  TextContent,
  ImgBackground,
  Img,
  CloseIcon,
  H2Styled,
  PStyled,
};
