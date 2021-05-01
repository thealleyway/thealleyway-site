import {
  getAuthorTestimonies,
  getFrequentlyAnsweredQuestions,
  getStoryInquiryPage,
  getNavigation,
  getFooter,
  getBoxLink,
} from '../lib/api';
import StoryInquiryPage from '../components/story-inquiry-page/StoryInquiryPage';

export default function StoryInquiry({
  storyInquiryPageData,
  authorTestimonies,
  questionsAndAnswers,
  navigationData,
  boxLinkDataFooter,
  footerData,
}) {

  return (
    <>
      <StoryInquiryPage
        storyInquiryPageData={storyInquiryPageData}
        authorTestimonies={authorTestimonies}
        questionsAndAnswers={questionsAndAnswers}
        navigationData={navigationData}
        boxLinkDataFooter={boxLinkDataFooter}
        footerData={footerData} />
    </>
  );
}

export async function getStaticProps() {
  const storyInquiryPageData = await getStoryInquiryPage();
  const authorTestimoniesIds = storyInquiryPageData.author_testimonies.map(
    (item) => {
      return item.author_testimony.id;
    },
  );
  const authorTestimonies = await getAuthorTestimonies(authorTestimoniesIds);

  const faqsIds = storyInquiryPageData.questions_and_answers.map((item) => {
    return item.question_and_answer.id;
  });
  const questionsAndAnswers = await getFrequentlyAnsweredQuestions(faqsIds);
  const footerData = await getFooter();
  const navigationData = await getNavigation();
  const boxLinkDataFooter = await getBoxLink(
    storyInquiryPageData.box_link_footer.id,
  );

  return {
    props: {
      storyInquiryPageData,
      authorTestimonies,
      questionsAndAnswers,
      footerData,
      boxLinkDataFooter,
      navigationData,
    },
  };
}
