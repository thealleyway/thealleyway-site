import { renderRichText } from "../lib/richText";
import { getHomePage, getNavigation, getFooter } from "../lib/api";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function HomePage({ homePageData, navigationData, footerData }) {

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
      <Footer footerData={footerData}/>
    </>
  );
}

export async function getStaticProps() {
  const homePageData = await getHomePage();
  const footerData = await getFooter();
  const navigationData = await getNavigation();

  return {
    props: {
      homePageData,
      footerData,
      navigationData,
    },
  };
}
