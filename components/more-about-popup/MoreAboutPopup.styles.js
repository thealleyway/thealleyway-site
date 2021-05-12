import styled from 'styled-components';
import { min, max } from '../../lib/responsive';
import { colors } from '../../style/colors';
import { H4 } from '../../style/typography';
import { motion } from 'framer-motion';

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
  width: 150%;
  height: 100%;
`;

const CloseIcon = styled(motion.img)`
  position: absolute;
  border: none;
  top: 1em;
  right: 1em;
  width: clamp(1.3em, 7vw, 1.6em);
  @media ${min.desktop} {
    width: 1.3em;
  }

  &:hover {
    cursor: pointer;
  }
`;

const PopupBox = styled(motion.div)`
  border: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 150;
  font-size: 0.9em;
  top: 15%;
  left: 0;
  @media ${min.tablet} {
    top: 20%;
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
  height: fit-content;
  padding: clamp(0.5em, 5vw, 1.5em);
  width: 83%;
  top: 0;

  @media ${max.mobile} {
    height: 26em;
  }
  @media ${min.tabletSm} {
    padding: 1.5em;
    width: 24em;
    height: fit-content;
  }
  @media ${min.tablet} {
    width: 25em;
    padding: 1.7em 2em 2em 2.5em;
  }
  @media ${min.desktop} {
    padding: 2em;
    width: 25em;
  }
  @media ${min.desktopLg} {
    top: 15%;
  }
`;

export { PopupBox, Box, PopupTitle, TextContentWrapper, PopupImage, CloseIcon };
