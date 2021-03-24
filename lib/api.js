import Prismic from "prismic-javascript";

const STORY_REQUEST_SIZE = 18;

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`;
const client = Prismic.client(REF_API_URL);

export async function getHomePage() {
  const { data } = await client.getSingle("home_page");
  return data;
}

export async function getAboutPage() {
  const { data } = await client.getSingle("about_page");
  return data;
}

export async function getStoryInquiryPage() {
  const { data } = await client.getSingle("story_submission");
  return data;
}

export async function getNavigation() {
  const { data } = await client.getSingle("navigation");
  return data;
}

export async function getStoryArchivePage() {
  const { data } = await client.getSingle("story_archive");
  return data;
}

export async function getStories() {
  const stories = await client.query(
    Prismic.Predicates.at("document.type", "story")
  );
  return stories.results;
}

export async function getStoriesByPage(pageNumber) {
  const stories = await client.query(
    Prismic.Predicates.at("document.type", "story"),
    { pageSize: STORY_REQUEST_SIZE, page: pageNumber }
  );
  return stories;
}

export async function getStory(uid) {
  const story = await client.getByUID("story", uid);
  return story.data;
}

export async function getFooter() {
  const { data } = await client.getSingle("footer");
  return data;
}

export async function getAuthorInfo(id) {
  const { data } = await client.getByID(id);
  return data;
}

export async function getContactPage() {
  const { data } = await client.getSingle("contact_page");
  return data;
}

export async function getAuthorTestimonies(ids) {
  const authorTestimonies = await client.getByIDs(ids);
  const results = authorTestimonies.results.map((item) => {
    return {
      author_testimony: item.data.author_testimony,
      author_name: item.data.author_name,
      author_info: item.data.author_info,
    };
  });

  return results;
}

export async function getFrequentlyAnsweredQuestions(ids) {
  const questionsAndAnswers = await client.getByIDs(ids);
  const results = questionsAndAnswers.results.map((item) => {
    return {
      id: item.id,
      question: item.data.question,
      answer: item.data.answer,
    };
  });

  return results;
}

export async function get404() {
  const { data } = await client.getSingle("404_page");
  return data;
}

export async function getValues() {
  const values = await client.query(
    Prismic.Predicates.at("document.type", "values")
  );
  return values.results;
}
