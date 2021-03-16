import { renderRichText } from "../lib/richText";
import {
  getAuthorTestimonies,
  getFrequentlyAnsweredQuestions,
  getStoryInquiryPage,
} from "../lib/api";
import AuthorTestimony from "../components/AuthorTestimony";
import QuestionAnswer from "../components/QuestionAnswer";

export default function StoryInquiryPage({
  storyInquiryPageData,
  authorTestimonies,
  questionsAndAnswers,
}) {
  const {
    story_submission_title: storySubmissionTitle,
    story_submission_description: storySubmissionDescription,
    submission_guidelines_subtitle: submissionGuidelinesSubtitle,
    submission_guidelines_description: submissionGuidelinesDescription,
    faq_title: faqTitle,
    author_testimony_title: authorTestimonyTitle,
    donation_resources_subtitle: donationResourcesSubtitle,
  } = storyInquiryPageData;

  return (
    <>
      {renderRichText(storySubmissionTitle)}
      {renderRichText(storySubmissionDescription)}
      {renderRichText(submissionGuidelinesSubtitle)}
      {renderRichText(submissionGuidelinesDescription)}
      {renderRichText(donationResourcesSubtitle)}
      {renderRichText(authorTestimonyTitle)}
      {authorTestimonies.map((item, i) => {
        return <AuthorTestimony key={i} authorTestimonyData={item} />;
      })}
      {renderRichText(faqTitle)}
      {questionsAndAnswers.map((item, i) => {
        return <QuestionAnswer key={i} questionAnswerData={item} />;
      })}
    </>
  );
}

export async function getStaticProps() {
  const storyInquiryPageData = await getStoryInquiryPage();
  const authorTestimoniesIds = storyInquiryPageData.author_testimonies.map((item) => {
    return item.author_testimony.id;
  });
  const authorTestimonies = await getAuthorTestimonies(authorTestimoniesIds);

  const faqsIds = storyInquiryPageData.questions_and_answers.map((item) => {
    return item.question_and_answer.id;
  });
  const questionsAndAnswers = await getFrequentlyAnsweredQuestions(faqsIds);

  return {
    props: {
      storyInquiryPageData,
      authorTestimonies,
      questionsAndAnswers,
    },
  };
}
