import styled from 'styled-components';
import { min, max } from '../../lib/responsive';

const SquiggleWavy = styled.img`
   width: 22%;
   margin: 1em 0 -.5em 17em;
`;

const HeaderStyling = styled.div`
font-size: clamp(.6em, 2.7vw, 3em);
@media ${min.tablet} {
  font-size: .5em;
}
@media ${min.desktop} {
  font-size: .5em;
}
`;

export { SquiggleWavy, HeaderStyling }