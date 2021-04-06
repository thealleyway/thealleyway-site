import { H1 } from '../../style/typography';
import styled from 'styled-components';
import { min } from '../../lib/responsive';

const H1Container = styled.div`
  white-space: nowrap;
  @media ${min.mobile} {
    margin: 25em 0 5em 7.5em;
  }
  @media ${min.tablet} {
    margin: 20.5em 0 4em 8em;
  }
  @media ${min.desktop} {
    margin: 4em 0 2em 5.9em;
  }
`;

const H1Regular = styled(H1)`
  margin: 0 auto;
`;

const H1Italicized = styled(H1)`
  @media ${min.mobile} {
    margin: 0 0 0 0.65em;
    line-height: 0.3em;
  }
  @media ${min.tablet} {
    margin: 0 0 0 0.55em;
    line-height: 0.3em;
  }
  @media ${min.desktop} {
    margin: 0 0 0 0.76em;
    line-height: 0.43em;
  }
`;

export { H1Container, H1Regular, H1Italicized };
