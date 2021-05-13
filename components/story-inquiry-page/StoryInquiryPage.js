import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import H1Styled from '../h1-styled/H1Styled';
import { getString } from '../../lib/richText';
import StoryConceptFaq from './story-concept-faq/StoryConceptFaq';
import PageDescription from '../page-description/PageDescription';
import {
  SquiggleWavy,
  H1StyledContainer,
  LongLinesContainer,
  TopSparkArrowContainer,
  SideImageContainer,
  QuoteCarouselContainer,
  ScrollToAuthorTestimonies,
} from './StoryInquiryPage.styles';
import StoryInquiryForm from './story-inquiry-form/StoryInquiryForm';
import { icons } from '../../style/icons';
import LongSparkArrow from '../long-spark-arrow/LongSparkArrow';
import QuoteCarousel from '../quote-carousel/QuoteCarousel';
import SideImage from './side-image/SideImage';
import LongLines from './long-lines/LongLines';
import LongLinesFlipped from './long-lines-flipped/LongLinesFlipped';
import { useSpring } from 'react-spring';
import { header } from '../../style/animations';
import { truncateString } from '../../lib/utils';

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
    truncateString(getString(q.author_testimony), 150),
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

  const headerAnimation = useSpring(header);

  return (
    <>
      <Navigation navigationData={navigationData} />
      <H1StyledContainer style={headerAnimation}>
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
        <SideImage image={storyInquirySideImage1} />
        <SideImage image={storyInquirySideImage2} />
        <SideImage image={storyInquirySideImage3} />
      </SideImageContainer>
      <LongLinesContainer>
        <LongLines />
        <LongLinesFlipped />
      </LongLinesContainer>
      <StoryInquiryForm
        storyInquiryFormData={storyInquiryFormData}
        storyConceptPopupData={storyConceptPopupData}
        storySubmissionConfirmationData={storySubmissionConfirmationData}
      />
      <StoryConceptFaq
        storyConceptFaqData={storyConceptFaqData}
        sparkArrowAuthorTestimoniesText={sparkArrowAuthorTestimoniesText}
      />
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
