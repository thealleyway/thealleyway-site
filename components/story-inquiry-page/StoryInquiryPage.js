import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import H1Styled from '../h1-styled/H1Styled';
import { getString } from '../../lib/richText';
import StoryConceptFaq from './story-concept-faq/StoryConceptFaq';
import PageDescription from '../page-description/PageDescription';
import {
  SquiggleWavy,
  H1StyledContainer,
  LongLinesDesktop,
  LongLinesFlippedDesktop,
  LongLinesTablet,
  LongLinesFlippedTablet,
  LongLinesContainer,
  TopSparkArrowContainer,
  BottomSparkArrowContainer,
  SideImageContainer,
  SideImage,
  QuoteCarouselContainer,
  ScrollToAuthorTestimonies,
} from './StoryInquiryPage.styles';
import StoryInquiryForm from './story-inquiry-form/StoryInquiryForm';
import { icons } from '../../style/icons';
import LongSparkArrow from '../long-spark-arrow/LongSparkArrow';
import QuoteCarousel from '../quote-carousel/QuoteCarousel';
import React, { useState, useRef, useEffect } from "react";

export default function StoryInquiryPage({
  storyInquiryPageData,
  authorTestimonies,
  questionsAndAnswers,
  navigationData,
  boxLinkDataFooter,
  footerData,
}) {
  const {
    story_submission_title_regular: storySubmissionTitleRegular,
    story_submission_title_italic: storySubmissionTitleItalic,
    story_submission_description: storySubmissionDescription,
    author_information_subtitle: authorInformationSubtitle,
    author_signature_subtitle: authorSignatureSubtitle,
    author_signature_description: authorSignatureDescription,
    social_information_subtitle: socialInformationSubtitle,
    venmo_more_info_subtitle: venmoMoreInfoSubtitle,
    venmo_more_info_description: venmoMoreInfoDescription,
    story_concept_subtitle: storyConceptSubtitle,
    story_concept_description: storyConceptDescription,
    story_concept_box_subtitle: storyConceptBoxSubtitle,
    story_concept_popup_title: popupTitle,
    story_concept_popup_description: popupDescription,
    story_concept_popup_image: popupImage,
    resource_links_subtitle: resourceLinksSubtitle,
    resource_links_description: resourceLinksDescription,
    faq_title: faqTitle,
    author_testimonies_title: title,
    author_testimonies_description: description,
    author_testimonies_image: quoteImage,
    story_submission_confirmation_title_regular: confirmationTitleRegular,
    story_submission_confirmation_title_italic: confirmationTitleItalic,
    story_submission_confirmation_description: confirmationDescription,
    story_submission_confirmation_image: confirmationImage,
    spark_arrow_description_text: sparkArrowDescriptionText,
    spark_arrow_faq_text: sparkArrowFaqText,
    spark_arrow_author_testimonies_text: sparkArrowAuthorTestimoniesText,
    footer_image: footerImage,
    story_inquiry_top_image: storyInquiryTopImage,
    story_inquiry_side_image_1: storyInquirySideImage1,
    story_inquiry_side_image_2: storyInquirySideImage2,
    story_inquiry_side_image_3: storyInquirySideImage3,
  } = storyInquiryPageData;

  const storyConceptFaqData = {
    faqTitle,
    questionsAndAnswers,
  };

  const storySubmissionConfirmationData = {
    confirmationTitleRegular,
    confirmationTitleItalic,
    confirmationDescription,
    confirmationImage,
  };

  const quotes = authorTestimonies.map((q) =>
    getString(q.author_testimony).length > 154
      ? getString(q.author_testimony).slice(0, 154) + '...'
      : getString(q.author_testimony),
  );

  const authors = authorTestimonies.map((m) => getString(m.author_name));

  const authorTestimoniesData = {
    title,
    description,
    quotes,
    quoteImage,
  };

  const boxLinkFooter = { img: footerImage, data: boxLinkDataFooter };

  const storyInquiryFormData = {
    authorInformationSubtitle,
    authorSignatureSubtitle,
    authorSignatureDescription,
    socialInformationSubtitle,
    venmoMoreInfoSubtitle,
    venmoMoreInfoDescription,
    storyConceptSubtitle,
    storyConceptDescription,
    storyConceptBoxSubtitle,
    resourceLinksSubtitle,
    resourceLinksDescription,
  };

  const storyConceptPopupData = {
    popupTitles: [popupTitle],
    popupDescriptions: [popupDescription],
    popupImage,
  };

  const placeHolderRef = useRef(null);
  const [showFooter, setShowFooter] = useState(false);
  
  useEffect(() => {
    /**
     * To Register Observer on the span.
     */
    registerObserver(placeHolderRef.current, setShowFooter);
  }, []);


  const registerObserver = (ref, setShowImage) => {
    const observer = new IntersectionObserver((enteries, observer) => {
      enteries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        setShowImage(true);
        observer.disconnect();
      });
    });
    observer.observe(ref);
  };
  

  return (
    <>
      <Navigation navigationData={navigationData} />
      <H1StyledContainer>
        <H1Styled
          regular={storySubmissionTitleRegular}
          italicized={storySubmissionTitleItalic}
          storyInquiry={true}
        />
        <SquiggleWavy src={icons.SQUIGGLE_WAVY} alt="wavy squiggle underline" />
      </H1StyledContainer>
      <PageDescription
        description={storySubmissionDescription}
        arrowText={sparkArrowDescriptionText}
        img={storyInquiryTopImage}
        scrollTo={'submission form'}
      />
      <TopSparkArrowContainer>
        <LongSparkArrow arrowText={sparkArrowFaqText} scrollTo="faq" />
      </TopSparkArrowContainer>
      <SideImageContainer>
        <SideImage
          src={storyInquirySideImage1.url}
          alt={storyInquirySideImage1.alt}
        />
        <SideImage
          src={storyInquirySideImage2.url}
          alt={storyInquirySideImage2.alt}
        />
        <SideImage
          src={storyInquirySideImage3.url}
          alt={storyInquirySideImage3.alt}
        />
      </SideImageContainer>
      <LongLinesContainer>
        <LongLinesDesktop
          src={icons.LONG_LINES_DESKTOP}
          alt="long lines with spark at the end for desktop"
        />
        <LongLinesFlippedDesktop
          src={icons.LONG_LINES_FLIPPED_DESKTOP}
          alt="long lines with spark at the end flipped for desktop"
        />
        <LongLinesTablet
          src={icons.LONG_LINES_TABLET}
          alt="long lines with spark at the end for tablet"
        />
        <LongLinesFlippedTablet
          src={icons.LONG_LINES_FLIPPED_TABLET}
          alt="long lines with spark at the end flipped for tablet"
        />
      </LongLinesContainer>
      <StoryInquiryForm
        storyInquiryFormData={storyInquiryFormData}
        storyConceptPopupData={storyConceptPopupData}
        storySubmissionConfirmationData={storySubmissionConfirmationData}
      />
      <StoryConceptFaq storyConceptFaqData={storyConceptFaqData} />
      <BottomSparkArrowContainer>
        <LongSparkArrow
          arrowText={sparkArrowAuthorTestimoniesText}
          scrollTo="author testimonies"
        />
      </BottomSparkArrowContainer>
      <ScrollToAuthorTestimonies id="author testimonies" />
      <QuoteCarouselContainer>
        <QuoteCarousel
          quoteCarouselData={authorTestimoniesData}
          isAuthorTestimonies
          authors={authors}
        />
      </QuoteCarouselContainer>
      <Footer footerData={footerData} footerBoxLinkData={boxLinkFooter} />
    </>
  );
}
