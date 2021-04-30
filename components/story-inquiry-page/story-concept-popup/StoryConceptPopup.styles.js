import styled from 'styled-components';
import { min } from '../../../lib/responsive';
import { colors } from '../../../style/colors';
import {H4, fontWeights} from '../../../style/typography';

const PopupTitle = styled(H4)`
    color: ${colors.MAUVE};
`;

const TextContentWrapper = styled.div`
    width: 80%;
    margin: 2.1em 0 0 1.3em;
`;

const PopupBox = styled.div`
  border: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 5;
  font-size: .9em;
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
  height: 25em
  padding: 1em;
  width: 80%;
  top: 0;
  @media ${min.tablet} {
    height: 29em;
  }
  @media ${min.desktop} {
    height: 25em;
    padding: 2em;
    width: 29%;
  }
  @media ${min.desktopLg} {
    top: 22%;
  }
`;

export {
    PopupBox,
    Box,
    PopupTitle,
    TextContentWrapper
}