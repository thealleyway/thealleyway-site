import styled from 'styled-components';
import { min, max } from '../../lib/responsive';

const SquiggleWavy = styled.img`
  position: absolute;
  width: 8.7em;
  margin: -3em 0 0 4em;
  @media ${min.tablet} {
    width: 16em;
    margin: -9em 0 0 8em;
  }
  @media ${min.desktop} {
    width: 17.5em;
    margin: 1em 0 0 17em;
  }
`;

const H1StyledContainer = styled.div`
  @media ${min.tablet} {
    padding-bottom: 0.5em;
  }
  @media ${min.desktop} {
    padding-bottom: 2.5em;
  }
`;

export { SquiggleWavy, H1StyledContainer };
