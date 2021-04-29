
import { H1, H2, H3, P } from '../../style/typography';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import H1Styled from '../h1-styled/H1Styled';
import { getString } from '../../lib/richText';
import QuestionAnswer from '../question-answer/QuestionAnswer';
import AuthorTestimony from '../author-testimony/AuthorTestimony';
import PageDescription from '../page-description/PageDescription';
import { SquiggleWavy } from './StoryInquiryPage.styles';
import StoryInquiryForm from './story-inquiry-form/StoryInquiryForm';
import { icons } from '../../style/icons';

export default function StoryInquiryPage({ storyInquiryPageData,
    authorTestimonies,
    questionsAndAnswers,
    navigationData,
    boxLinkDataFooter,
    footerData
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
        resourceLinksSubtitle,
        resourceLinksDescription,
    }



    return (
        <>
            {/* <Navigation navigationData={navigationData} /> */}
            <H1Styled regular={storySubmissionTitleRegular} italicized={storySubmissionTitleItalic} storyInquiry={true} />
                        <SquiggleWavy src={icons.SQUIGGLE_WAVY}/>
            <PageDescription description={storySubmissionDescription} arrowText={sparkArrowDescriptionText} img={storyInquiryTopImage} />
            <StoryInquiryForm storyInquiryFormData={storyInquiryFormData}/>

            <H2>{getString(faqTitle)}</H2>
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
            })}

            {/* <StorySubmissionConfirmation
        title={storySubmissionConfirmationTitle}
        description={storySubmissionConfirmationDescription}
      /> */}
            <P>{getString(sparkArrowFaqText)}</P>
            <P>{getString(sparkArrowAuthorTestimoniesText)}</P>
            <Footer footerData={footerData} footerBoxLinkData={boxLinkFooter} />
        </>
    )
}
