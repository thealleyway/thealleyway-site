import styled from 'styled-components';
import { min } from '../../lib/responsive';
import { animated } from 'react-spring';

const HeaderAndSquiggleContainer = styled(animated.div)`
  @media ${min.tablet} {
    padding-bottom: 1em;
  }
  @media ${min.desktop} {
    padding-bottom: 2.3em;
  }
`;

const PageContainer = styled.div`
  position: relative;
  margin-bottom: -3em;
  @media ${min.tablet} {
    margin-bottom: -1em;
  }
  @media ${min.desktop} {
    margin-bottom: -3em;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -2.5em;
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

export {
  SquiggleUnderline,
  HeaderAndSquiggleContainer,
  PageContainer,
  FormContainer,
};
