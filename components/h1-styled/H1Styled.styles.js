import { H1 } from '../../style/typography';
import styled from 'styled-components';
import { min } from '../../lib/responsive';

const H1Container = styled.div`
  white-space: nowrap;
  font-size: ${(props) => (props.longItalicized ? `clamp(0.8em, 4.3vw, 1em)` : `clamp(0.8em, 4.5vw, 1em)`)};
  margin: ${(props) => (props.longItalicized ? `6em 0 0em 3em` : `9.5em 0 0 3em`)};
  @media ${min.tablet} {
    margin: ${(props) => (props.longItalicized ? `8em 0 4em 5em` : `15em 0 4em 5em`)};
  }
  @media ${min.desktop} {
    margin: 4em 0 2em 5.9em;
  }
`;

const H1Regular = styled(H1)`
margin: 0 auto;
@media ${min.tablet} {
  margin: ${(props) => (props.longItalicized ? `0 0 0 .2em` : `0 auto`)}; 
}

`;

const H1Italicized = styled(H1)`
  margin: 0 0 0 0.65em;
  line-height: 0.3em;
  @media ${min.tablet} {
    margin: 0 0 0 0.55em;
  }
  @media ${min.desktop} {
    margin: 0 0 0 0.76em;
    line-height: 0.43em;
  }
`;

const H1Italicized1 = styled(H1)`
margin: .05em 0 0 -.2em;
line-height: 0.3em;
@media ${min.tablet} {
  margin: .05em 0 0 0;
}
@media ${min.desktop} {
  margin: 0 0 0 0.76em;
  line-height: 0.43em;
}
`

const H1Italicized2 = styled(H1)`
margin: .5em 0 0 1.1em;
line-height: 0.3em;
@media ${min.tablet} {
  margin: .5em 0 0 0.7em;
}
@media ${min.desktop} {
  margin: 0 0 0 .15em;
  line-height: 0.43em;
}
`

const H1ItalicizedContainer = styled.div`
@media ${min.desktop} {
  display: flex;
}
`;

export { H1Container, H1Regular, H1Italicized, H1Italicized1, H1Italicized2, H1ItalicizedContainer };
