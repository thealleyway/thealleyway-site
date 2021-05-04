import Prismic from 'prismic-javascript';

const STORY_REQUEST_SIZE = 18;

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
//const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`;
const client = Prismic.client(REF_API_URL);
const DOCUMENT_TYPE = 'document.type';

export async function getHomePage() {
  const { data } = await client.getSingle('home_page', {
    fetchLinks: [
      'story.story_preview_title_regular',
      'story.story_preview_title_italic',
      'story.story_preview_text',
      'story.preview_image',
      'story.author_info',
    ],
  });

  return data;
}

export async function getAboutPage() {
  const { data } = await client.getSingle('about_page');
  return data;
}

export async function getStoryInquiryPage() {
  const { data } = await client.getSingle('story_submission');
  return data;
}

export async function getNavigation() {
  const { data } = await client.getSingle('navigation');
  return data;
}

export async function getStoryArchivePage() {
  const { data } = await client.getSingle('story_archive');
  return data;
}

export async function getStories() {
  const stories = await client.query(
    Prismic.Predicates.at(DOCUMENT_TYPE, 'story'),
  );
  return stories.results;
}

export async function getStoriesByPage(pageNumber, order) {
  const queryOrder =
    order == 'date' ? '[my.story.story_date]' : '[my.story.story_title]';
  return await client.query(Prismic.Predicates.at(DOCUMENT_TYPE, 'story'), {
    pageSize: STORY_REQUEST_SIZE,
    page: pageNumber,
    orderings: queryOrder,
  });
}

export async function getStory(uid) {
  const story = await client.getByUID('story', uid);
  return story.data;
}

export async function getFooter() {
  const { data } = await client.getSingle('footer');
  return data;
}

export async function getAuthorInfo(id) {
  const { data } = await client.getByID(id);
  return data;
}

export async function getAuthorSignatureFromIDs(ids) {
  const authorInfos = await client.getByIDs(ids);
  const results = {};
  authorInfos.results.map((item) => {
    results[item.id] = item.data.signature;
  });
  return results;
}

export async function getContactPage() {
  const { data } = await client.getSingle('contact_page');
  return data;
}

export async function getAuthorTestimonies(ids) {
  const authorTestimonies = await client.getByIDs(ids);
  return authorTestimonies.results.map((item) => ({
    author_testimony: item.data.author_testimony,
    author_name: item.data.author_name,
    author_info: item.data.author_info,
  }));
}

export async function getFrequentlyAnsweredQuestions(ids) {
  const questionsAndAnswers = await client.getByIDs(ids);
  return questionsAndAnswers.results.map((item) => ({
    id: item.id,
    question: item.data.question,
    answer: item.data.answer,
  }));
}

export async function get404() {
  const { data } = await client.getSingle('404_page');
  return data;
}

export async function getValues() {
  const values = await client.query(
    Prismic.Predicates.at(DOCUMENT_TYPE, 'values'),
  );
  return values.results;
}

export async function getMainResources(ids) {
  const mainResources = await client.getByIDs(ids);
  return mainResources.results.map((item) => ({
    id: item.id,
    resourceTitle: item.data.resource_title,
    resourceLink: item.data.resource_link,
    resourceDescription: item.data.resource_description,
  }));
}

export async function getBoxLink(id) {
  const { data } = await client.getByID(id);
  return data;
}
