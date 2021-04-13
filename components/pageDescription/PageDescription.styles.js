import { P } from '../../style/typography';
import styled from 'styled-components';
import { min } from '../../lib/responsive';

const PageDescriptionContainer = styled.div`
  display: flex;
  position: relative;
  @media ${min.mobile} {
    // padding: 4em 0 0 0;
    // margin: 0 0 0 10em;
  }
  @media ${min.tablet} {
    padding: 2em 0 0 0;
    margin: 0 0 0 8em;
  }
  @media ${min.desktop} {
    padding: 3em 0 0 0;
    margin: 0 0 0 11em;
  }
`;

const DescriptionContainer = styled.div`
  @media ${min.mobile} {
    margin: 10% 0 0 24%;
  }
  @media ${min.tablet} {
    margin: 0 0 0 2em;
  }
`;

const Description = styled(P)`
  @media ${min.mobile} {
    width: 92%;
    line-height: 1.8em;
  }
  @media ${min.tablet} {
    margin: 0 0 0 1em;
    width: 17em;
    line-height: 1.8em;
  }
  @media ${min.desktop} {
    margin: 0 0 0 4em;
    width: 19em;
  }
`;

const Img = styled.img`
  opacity: 10%;
  object-fit: cover;
  position: absolute;
  @media ${min.mobile} {
    top: 3em;
    right: 1em;
    width: 50%;
    height: 30%;
  }
  @media ${min.tablet} {
    top: -13.5em;
    right: 0;
    width: 29em;
    height: 24em;
  }
  @media ${min.desktop} {
    top: 0;
    right: 0;
    width: 38.5em;
    height: 38em;
  }
`;

export { PageDescriptionContainer, DescriptionContainer, Description, Img };
