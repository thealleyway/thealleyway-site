import { renderRichText } from "../lib/richText";
import { getHomePage } from "../lib/api";

export default function HomePage({ homePageData }) {
  const {
    home_page_title: homePageTitle,
    featured_stories_title: featuredStoriesTitle,
    featured_stories: featuredStories,
    newsletter_signup: newsletterSignup,
    newsletter_description: newsletterDescription,
  } = homePageData;

  return (
    <>
      {renderRichText(homePageTitle)}
      {renderRichText(featuredStoriesTitle)}
      {renderRichText(newsletterSignup)}
      {renderRichText(newsletterDescription)}
    </>
  );
}

export async function getStaticProps() {
  const homePageData = await getHomePage();

  return {
    props: {
      homePageData,
    },
  };
}
