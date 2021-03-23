import {
  getAuthorTestimonies,
  getFrequentlyAnsweredQuestions,
  getStoryInquiryPage,
  getNavigation,
  getFooter,
} from "../lib/api";
import AuthorTestimony from "../components/AuthorTestimony";
import QuestionAnswer from "../components/QuestionAnswer";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import H1 from "../components/headers/H1";
import H2 from "../components/headers/H2";
import H3 from "../components/headers/H3";
import Text from "../components/Text";


export default function StoryInquiryPage({
  storyInquiryPageData,
  authorTestimonies,
  questionsAndAnswers,
  navigationData,
  footerData,
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
      <Navigation navigationData={navigationData} />
      <H1 h1Data={storySubmissionTitle} />
      <Text textData={storySubmissionDescription} />
      <H2 h2Data={submissionGuidelinesSubtitle} />
      <Text textData={submissionGuidelinesDescription} />
      <H3 h3Data={donationResourcesSubtitle} />
      <H3 h3Data={authorTestimonyTitle} />
      {authorTestimonies.map((item) => {
        return <AuthorTestimony key={item.author_info.id} authorTestimonyData={item} />;
      })}
      <H2 h2Data={faqTitle} />
      {questionsAndAnswers.map((item) => {
        return <QuestionAnswer key={item.id} questionAnswerData={item} />;
      })}
      <Footer footerData={footerData} />
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

  const footerData = await getFooter();
  const navigationData = await getNavigation();

  return {
    props: {
      storyInquiryPageData,
      authorTestimonies,
      questionsAndAnswers,
      footerData,
      navigationData,
    },
  };
}
