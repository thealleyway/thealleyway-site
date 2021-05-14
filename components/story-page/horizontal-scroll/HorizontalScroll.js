import React, { useEffect, useRef } from 'react';
import {
  TallOuterContainer,
  StickyInnerContainer,
  HorizontalTranslateContainer,
} from './HorizontalScroll.styles';

const calcDynamicHeight = (objectWidth) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
  setTimeout(() => {
    if (ref.current) {
      const objectWidth = ref.current.scrollWidth;
      const dynamicHeight = calcDynamicHeight(objectWidth);
      setDynamicHeight(dynamicHeight);
    }
  }, 1000);
};

const applyScrollListener = (ref, setTranslateX) => {
  const scrollListener = () => {
    const offsetTop = -ref.current.offsetTop;
    setTranslateX(offsetTop);
  };
  window.addEventListener('scroll', scrollListener);
  return () => window.removeEventListener('scroll', scrollListener);
};

export default function HorizontalScroll({
  dynamicHeight,
  setDynamicHeight,
  translateX,
  setTranslateX,
  children,
}) {
  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener('resize', resizeHandler);
    const removeListener = applyScrollListener(containerRef, setTranslateX);
    return () => {
      window.removeEventListener('resize', resizeHandler);
      removeListener();
    };
  }, []);

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer ref={containerRef}>
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          {children}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  );
}
