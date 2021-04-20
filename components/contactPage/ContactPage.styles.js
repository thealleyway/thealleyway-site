import styled from 'styled-components';
import { min } from '../../lib/responsive';
import { colors } from '../../style/colors';
const HeaderAndSquiggleContainer = styled.div`
  @media ${min.tablet} {
    padding-bottom: 1em;
  }
  @media ${min.desktop} {
    padding-bottom: 2.3em;
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
  bottom: -42em;
  @media ${min.tablet} {
    bottom: -43.5em;
  }
`;

const SquiggleUnderline = styled.img`
  position: absolute;
  width: clamp(16em, 80vw, 21em);
  margin: 2em 0 0 2.5em;
  @media ${min.tablet} {
    width: 26em;
    margin: -1em 0 0 10em;
  }
  @media ${min.desktop} {
    width: 25em;
    margin: 0.6em 0 0 12.6em;
  }
`;

const Overlay = styled.div`
  display: ${(props) => (props.showOverlay ? 'block' : 'none')};
  position: fixed;
  background-color: ${colors.CREME};
  opacity: 0.7;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;
`;

export {
  SquiggleUnderline,
  HeaderAndSquiggleContainer,
  PageContainer,
  BackToStartButtonContainer,
  FormContainer,
  Overlay,
};
