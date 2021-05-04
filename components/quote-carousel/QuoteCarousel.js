import React, { useEffect, useState } from 'react';
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
} from './QuoteCarousel.style';
import { icons } from '../../style/icons';

const PREVIEW_CHANGE_IN_MILLISECONDS = 5000;

export default function QuoteCarousel({
  quoteCarouselData,
  isAuthorTestimonies,
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

  console.log(Number.parseInt(activeIndex));
  return (
    <ContentWrapper>
      <TextWrapper>
        <TitleWrapper>{getString(title)}</TitleWrapper>
        <DescriptionWrapper>{getString(description)}</DescriptionWrapper>
      </TextWrapper>
      <CarouselContainer>
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
            </QuoteContainer>
          </ImageArchContentWrapper>
        </ImageArchWrapper>
      </CarouselContainer>
    </ContentWrapper>
  );
}
