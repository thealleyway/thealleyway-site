import { renderRichText } from "../lib/richText";
import { getHomePage } from "../lib/api";
import { getFooter } from "../lib/api";
import Footer from "../components/Footer";

export default function HomePage({ homePageData, footerData }) {
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
      <Footer footerData={footerData}/>
    </>
  );
}

export async function getStaticProps() {
  const homePageData = await getHomePage();
  const footerData = await getFooter();

  return {
    props: {
      homePageData,
      footerData
    },
  };
}
