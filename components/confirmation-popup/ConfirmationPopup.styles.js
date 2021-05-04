import styled from 'styled-components';
import { min } from '../../lib/responsive';
import { P, H2 } from '../../style/typography';
import { colors } from '../../style/colors';

const PopupBox = styled.div`
  border: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 15;
  top: 20%;
  @media ${min.tablet} {
    top: 30%;
  }
  @media ${min.desktop} {
    top: 15%;
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
  height: ${(props) => (props.page == 'home' ? '34em' : '25em')};
  padding: 1em;
  width: 80%;
  top: ${(props) => (props.page == 'home' ? '-6em' : '0')};
  @media ${min.tablet} {
    height: 29em;
  }
  @media ${min.desktop} {
    top: -2%;
    padding: 20px;
    width: 58%;
  }
  @media ${min.desktopLg} {
    top: 22%;
  }
`;

const TextContent = styled.div`
  width: max(100%, 15em);
  padding: 1em;
  margin-top: -2em;
  @media ${min.tablet} {
    width: ${(props) => (props.page == 'home' ? '50%' : '60%')};
    padding: 0 0 0 3em;
    margin-top: ${(props) => (props.page == 'home' ? '3em' : '7em')};
  }
  @media ${min.desktop} {
    width: 50%;
    margin-top: ${(props) => (props.page == 'home' ? '3em' : '8em')};
    margin-left: 1em;
    font-size: 0.9em;
  }
`;

const H2Styled = styled(H2)`
  width: ${(props) => (props.page == 'home' ? '5em' : '8em')};
  font-size: clamp(1.6em, 10vw, 2.5em);
  @media ${min.tablet} {
    font-size: 2.6em;
  }
  @media ${min.desktop} {
    font-size: 3em;
    width: ${(props) => (props.page == 'home' ? '7em' : '8em')};
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
  width: 100%;
  height: 100%;
`;

const ArchImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Arch = styled.img`
  position: absolute;
  bottom: 2.5em;
  width: 6.5em;
  @media ${min.tablet} {
    top: 3.8em;
    right: 3.5em;
    width: 15em;
  }
`;

const Img = styled.img`
  object-fit: cover;
  position: absolute;
  bottom: 2.5em;
  width: 7.5em;
  height: 8em;
  @media ${min.tablet} {
    top: 5.5em;
    right: 3.5em;
    width: 10.5em;
    height: 17em;
    margin-top: -1em;
    margin-right: 2em;
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
  Arch,
  ArchImgContainer,
};
