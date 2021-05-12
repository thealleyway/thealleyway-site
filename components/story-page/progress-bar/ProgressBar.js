import React, { useState, useEffect } from 'react';
import {
  HorizontalProgressBarComponent,
  HorizontalWhiteBackground,
  VerticalProgressBarComponent,
  VerticalWhiteBackground,
} from './ProgressBar.styles';

export default function ProgressBar({ target, isHorizontalScroll }) {
  const [readingProgress, setReadingProgress] = useState(0);

  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight = isHorizontalScroll
      ? element.clientWidth - element.offsetLeft - window.innerWidth
      : element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop = isHorizontalScroll
      ? window.pageXOffset ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft ||
        0
      : window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  });

  return isHorizontalScroll ? (
    <>
      <HorizontalProgressBarComponent readingProgress={readingProgress} />
      <HorizontalWhiteBackground />
    </>
  ) : (
    <>
      <VerticalProgressBarComponent readingProgress={readingProgress} />
      <VerticalWhiteBackground />
    </>
  );
}
