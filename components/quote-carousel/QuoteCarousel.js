import React, { useState, useRef, useEffect } from "react";
import { getString } from '../../lib/richText';
import {
  ContentWrapper,
  TextWrapper,
  TitleWrapper,
  DescriptionWrapper,
  QuoteContainer,
  QuoteWrapper,
  CarouselContainer,
  ImageArchWrapper,
  ImageArchContentWrapper,
  ArchImage,
  ArchOutline,
  ArchSpark,
  AuthorsContainer,
  AuthorsWrapper
} from './QuoteCarousel.style';
import { icons } from '../../style/icons';

const PREVIEW_CHANGE_IN_MILLISECONDS = 5000;

export default function QuoteCarousel({
  quoteCarouselData,
  isAuthorTestimonies,
  authors
}) {
  const { title, description, quotes, quoteImage } = quoteCarouselData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    var fadeIn;
    var fadeOut;
    const showContent = setTimeout(() => {
      fadeIn = setTimeout(() => {
        setFadeIn(true);
        setActiveIndex((activeIndex + 1) % quotes.length);
      }, PREVIEW_CHANGE_IN_MILLISECONDS);

      fadeOut = setTimeout(() => {
        setFadeIn(false);
      }, PREVIEW_CHANGE_IN_MILLISECONDS / 2);
    }, PREVIEW_CHANGE_IN_MILLISECONDS);

    return () => {
      clearTimeout(showContent);
      clearTimeout(fadeIn);
      clearTimeout(fadeOut);
    };
  }, [activeIndex]);
  const placeHolderRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    /**
     * To Register Observer on the span.
     */
    registerObserver(placeHolderRef.current, setShow);
  }, []);

  const registerObserver = (ref, setShow) => {
    const observer = new IntersectionObserver((enteries, observer) => {
      enteries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        setShow(true);
        observer.disconnect();
      });
    });
    observer.observe(ref);
  };

  if (show) {
    return (
      <ContentWrapper initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 5}}>
        <TextWrapper isAuthorTestimonies={isAuthorTestimonies}>
          <TitleWrapper>{getString(title)}</TitleWrapper>
          <DescriptionWrapper>{getString(description)}</DescriptionWrapper>
        </TextWrapper>
        <CarouselContainer isAuthorTestimonies={isAuthorTestimonies}>
          <ImageArchWrapper>
            <ImageArchContentWrapper>
              <ArchSpark src={icons.FILLED_SPARK_WHITE} />
              <ArchImage url={quoteImage.url} />
              <ArchOutline />
              <QuoteContainer>
                <QuoteWrapper
                  key={Number.parseInt(activeIndex)}
                  fadeIn={fadeIn}
                  isAuthorTestimonies={isAuthorTestimonies}
                >
                  {quotes[Number.parseInt(activeIndex)]}
                </QuoteWrapper>
                <AuthorsContainer isAuthorTestimonies={isAuthorTestimonies}>
                  <AuthorsWrapper
                    key={Number.parseInt(activeIndex)}
                    fadeIn={fadeIn}
                  >
                    - {authors[Number.parseInt(activeIndex)]}
                  </AuthorsWrapper>
                </AuthorsContainer>
              </QuoteContainer>
            </ImageArchContentWrapper>
          </ImageArchWrapper>
        </CarouselContainer>
      </ContentWrapper>
    );
  }
  return <span ref={placeHolderRef} />;
}
