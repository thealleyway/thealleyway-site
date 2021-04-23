import styled from 'styled-components';
import { max } from '../../lib/responsive';

const BottomImageContainer = styled.div`
  position: absolute;
`;

const ImageBoxLinkContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex: 100%;
  flex-direction: row;
  overflow: hidden;
`;

const BoxLinkContainer = styled.div`
  margin: 2.5em 10% 1em 0;

  @media ${max.tabletLg} {
    margin-top: 2.5em;
  }
  @media ${max.tabletSm} {
    margin: 2em auto 1em auto;
  }
`;

const BottomImage = styled.img`
  opacity: 30%;
  object-fit: cover;
  height: 30em;
  width: 200vw;
`;

export {
  BottomImageContainer,
  BottomImage,
  ImageBoxLinkContainer,
  BoxLinkContainer,
};
