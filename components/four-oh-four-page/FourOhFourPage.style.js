import styled from 'styled-components';
import { H2, P } from '../../style/typography';
import { max } from '../../lib/responsive';

const ImgBackground = styled.img`
  opacity: 10%;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 38em;
  margin-top: 8em;
  padding-bottom: 4em;
  z-index: 0;

  @media only screen and ${max.tabletLg} {
    margin-top: 7em;
    height: 39em;
    padding-bottom: 2em;
  }
  @media only screen and ${max.tabletSm} {
    padding-bottom: 2em;
  }
`;

const ContentWrapper = styled.div`
  width: clamp(40em, 65vw, 53em);
  min-height: 30em;
  overflow: hidden;

  margin: 2.5em auto auto auto;
  padding-top: clamp(1em, 5vw, 4em);

  display: flex;
  flex: 100%;
  justify-content: space-between;
  align-items: center;

  @media ${max.tabletLg} {
    flex-direction: column;
    width: 80%;
    padding-top: 0;
    margin-top: 8em;
  }
`;
const TextWrapper = styled.div`
  width: clamp(20em, 30vw, 25em);
  padding-right: clamp(1em, 3vw, 4em);
  display: flex;
  flex-direction: column;

  @media ${max.tabletLg} {
    width: 20em;
    height: auto;
    margin: auto;
    padding-right: 0;
  }

  @media ${max.tabletSm} {
    width: 13em;
  }
`;

const ErrorTitleText = styled(H2)`
  margin: 0;
  width: 6em;
  font-size: clamp(2em, 3.5vw, 3em);

  @media ${max.tabletLg} {
    width: 100%;
    text-align: center;
  }

  @media ${max.tabletSm} {
    text-align: left;
  }
`;

const ErrorText = styled(P)`
  margin-top: clamp(1em, 2vw, 2em);
  width: 100%;

  @media ${max.tabletLg} {
    width: clamp(18em, 34vw, 20em);
    padding-left: 2em;
    padding-right: 1.25em;
    margin-top: 1em;
  }

  @media ${max.tabletSm} {
    padding-left: 0;
    width: 14em;
  }
`;

const ImgWrapper = styled.div`
  width: 30vw;
  display: flex;
  justify-content: flex-end;
  margin: 0;

  @media ${max.tabletLg} {
    width: 100%;
    justify-content: center;
  }
`;

const FrontImg = styled.img`
  width: clamp(13em, 24vw, 18em);
  height: clamp(11em, 27vw, 21em);

  @media ${max.tabletLg} {
    width: clamp(16em, 27vw, 17em);
    height: clamp(16em, 27vw, 17em);
  }

  @media ${max.tabletSm} {
    width: 13.5em;
    height: 13em;
  }
`;

export {
  ImgBackground,
  ContentWrapper,
  TextWrapper,
  ErrorTitleText,
  ErrorText,
  ImgWrapper,
  FrontImg,
};
