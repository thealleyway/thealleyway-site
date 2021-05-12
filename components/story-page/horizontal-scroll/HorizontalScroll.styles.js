import styled from 'styled-components';

export const TallOuterContainer = styled.div.attrs(({ dynamicHeight }) => ({
  style: { height: `${dynamicHeight}px` },
}))`
  position: relative;
  width: 100%;
`;

export const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

export const HorizontalTranslateContainer = styled.div.attrs(
  ({ translateX }) => ({
    style: { transform: `translateX(${translateX}px)` },
  }),
)`
  position: absolute;
  height: 100%;
  will-change: transform;
`;
