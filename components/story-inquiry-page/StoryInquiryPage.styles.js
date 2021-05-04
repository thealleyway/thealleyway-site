import styled from 'styled-components';
import { min } from '../../lib/responsive';

const LongLines = styled.img`
  position: relative;
  width: 11.2em;
  margin: 0 0 0 5.8em;
`;

const LongLinesFlipped = styled.img`
  position: relative;
  width: 11.2em;
  top: 27.5em;
  right: 12.1em;
`;

const LongLinesContainer = styled.div`
  position: absolute;
  margin: 27em 0 0 0;
`;

const SparkArrowContainer = styled.div`
  position: absolute;
  @media ${min.tablet} {
    margin: ${(props) =>
      props.bottom ? `-23.4em 0 0 10.9em` : `4.5em 0 0 7.8em`};
  }
  @media ${min.desktop} {
    margin: ${(props) =>
      props.bottom ? `-23.4em 0 0 10.9em` : `2em 0 0 10.9em`};
  }
`;

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

const SideImageContainer = styled.div`
  position: absolute;
  right: 0;
  opacity: 10%;
  margin-top: 10em;
  display: flex;
  flex-direction: column;
`;

const SideImage = styled.img`
  width: 16em;
  height: 32em;
  object-fit: cover;
  margin-bottom: 15em;
`;

export {
  SquiggleWavy,
  H1StyledContainer,
  LongLines,
  LongLinesFlipped,
  LongLinesContainer,
  SparkArrowContainer,
  SideImage,
  SideImageContainer,
};
