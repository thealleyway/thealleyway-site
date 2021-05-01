import { H1, H2, H3, P } from '../../style/typography';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import H1Styled from '../h1-styled/H1Styled';
import { getString } from '../../lib/richText';
import QuestionAnswer from '../question-answer/QuestionAnswer';
import AuthorTestimony from '../author-testimony/AuthorTestimony';
import PageDescription from '../page-description/PageDescription';
import {
  SquiggleWavy,
  H1StyledContainer,
  LongLines,
  LongLinesFlipped,
  LongLinesContainer,
  SparkArrowContainer,
  SideImageContainer,
  SideImage,
} from './StoryInquiryPage.styles';
import StoryInquiryForm from './story-inquiry-form/StoryInquiryForm';
import { icons } from '../../style/icons';
import LongSparkArrow from '../long-spark-arrow/LongSparkArrow';

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
    submission_form_subtitle: submissionFormSubtitle,
    author_information_subtitle: authorInformationSubtitle,
    author_signature_subtitle: authorSignatureSubtitle,
    author_signature_description: authorSignatureDescription,
    social_information_subtitle: socialInformationSubtitle,
    venmo_more_info_subtitle: venmoMoreInfoSubtitle,
    venmo_more_info_description: venmoMoreInfoDescription,
    story_concept_subtitle: storyConceptSubtitle,
    story_concept_description: storyConceptDescription,
    story_concept_box_subtitle: storyConceptBoxSubtitle,
    story_concept_popup_title: storyConceptPopupTitle, 
    story_concept_popup_description: storyConceptPopupDescription,
    story_concept_popup_image: storyConceptPopupImage,
    resource_links_subtitle: resourceLinksSubtitle,
    resource_links_description: resourceLinksDescription,
    faq_title: faqTitle,
    story_submission_confirmation_title: storySubmissionConfirmationTitle,
    story_submission_confirmation_description: storySubmissionConfirmationDescription,
    spark_arrow_description_text: sparkArrowDescriptionText,
    spark_arrow_faq_text: sparkArrowFaqText,
    spark_arrow_author_testimonies_text: sparkArrowAuthorTestimoniesText,
    footer_image: footerImage,
    story_inquiry_top_image: storyInquiryTopImage,
    story_inquiry_side_image_1: storyInquirySideImage1,
    story_inquiry_side_image_2: storyInquirySideImage2,
    story_inquiry_side_image_3: storyInquirySideImage3,
  } = storyInquiryPageData;

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
    story_concept_popup_title: storyConceptPopupTitle, 
    story_concept_popup_description: storyConceptPopupDescription,
    story_concept_popup_image: storyConceptPopupImage,
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
      />
      <SparkArrowContainer>
        <LongSparkArrow arrowText={sparkArrowFaqText} />
      </SparkArrowContainer>
      <SideImageContainer>
        <SideImage src={storyInquirySideImage1.url} alt={storyInquirySideImage1.alt} />
        <SideImage src={storyInquirySideImage2.url} alt={storyInquirySideImage2.alt} />
        <SideImage src={storyInquirySideImage3.url} alt={storyInquirySideImage3.alt} />
      </SideImageContainer>
      <LongLinesContainer>
        <LongLines
          src={icons.LONG_LINES}
          alt="long lines with spark at the end"
        />
        <LongLinesFlipped
          src={icons.LONG_LINES_FLIPPED}
          alt="long lines with spark at the end flipped"
        />
      </LongLinesContainer>
      <StoryInquiryForm storyInquiryFormData={storyInquiryFormData} storyConceptPopupData={storyConceptPopupData} />
      {/* <H2>{getString(faqTitle)}</H2>
      {questionsAndAnswers.map((item) => {
        return <QuestionAnswer key={item.id} questionAnswerData={item} />;
      })}
      {authorTestimonies.map((item) => {
        return (
          <AuthorTestimony
            key={item.author_info.id}
            authorTestimonyData={item}
          />
        );
      })} */}

      {/* <StorySubmissionConfirmation
        title={storySubmissionConfirmationTitle}
        description={storySubmissionConfirmationDescription}
      /> */}
      {/* <P>{getString(sparkArrowFaqText)}</P>
      <P>{getString(sparkArrowAuthorTestimoniesText)}</P> */}
      <Footer footerData={footerData} footerBoxLinkData={boxLinkFooter} />
    </>
  );
}
