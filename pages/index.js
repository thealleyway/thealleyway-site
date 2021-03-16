import { renderRichText } from "../lib/richText";
import { getHomePage, getNavigation } from "../lib/api";
import Navigation from "../components/Navigation";

export default function HomePage({ homePageData, navigationData }) {
  const {
    home_page_title: homePageTitle,
    featured_stories_title: featuredStoriesTitle,
    featured_stories: featuredStories,
    newsletter_signup: newsletterSignup,
    newsletter_description: newsletterDescription,
  } = homePageData;

  return (
    <>
      <Navigation navigationData={navigationData} />
      {renderRichText(homePageTitle)}
      {renderRichText(featuredStoriesTitle)}
      {renderRichText(newsletterSignup)}
      {renderRichText(newsletterDescription)}
    </>
  );
}

export async function getStaticProps() {
  const homePageData = await getHomePage();
  const navigationData = await getNavigation();

  return {
    props: {
      homePageData,
      navigationData,
    },
  };
}
