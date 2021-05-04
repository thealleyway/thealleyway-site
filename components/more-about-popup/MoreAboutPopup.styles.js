import styled from 'styled-components';
import { min } from '../../lib/responsive';
import { colors } from '../../style/colors';
import { H4 } from '../../style/typography';

const PopupTitle = styled(H4)`
  color: ${colors.MAUVE};
`;

const TextContentWrapper = styled.div`
  width: 80%;
  margin: 2.1em 0 0 1.3em;
`;

const PopupImage = styled.img`
  opacity: 10%;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
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

const PopupBox = styled.div`
  border: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 15;
  font-size: 0.9em;
  top: 20%;
  @media ${min.tablet} {
    top: 30%;
  }
  @media ${min.desktop} {
    top: 17%;
    left: 1em;
  }
  @media ${min.desktopLg} {
    top: 2%;
  }
`;

const Box = styled.div`
  background: ${colors.CREME};
  position: relative;
  margin: 1em auto;
  border: 0.15em solid ${colors.BLACK};
  overflow: auto;
  height: 26em;
  padding: clamp(0.5em, 5vw, 1.5em);
  width: 83%;
  top: 0;
  @media ${min.tabletSm} {
    height: 25em;
    padding: 1.5em;
    width: 24em;
  }
  @media ${min.tablet} {
    height: 24em;
    width: 25em;
    padding: 1.7em 2em 2em 2.5em;
  }
  @media ${min.desktop} {
    height: 25.5em;
    padding: 2em;
    width: 25em;
  }
  @media ${min.desktopLg} {
    top: 22%;
  }
`;

export { PopupBox, Box, PopupTitle, TextContentWrapper, PopupImage, CloseIcon };
