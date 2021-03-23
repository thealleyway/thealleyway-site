import { getHomePage, getNavigation, getFooter } from "../lib/api";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import H1 from "../components/headers/H1";
import H2 from "../components/headers/H2";
import Text from "../components/Text";

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
      <H1 h1Data={homePageTitle} />
      <H2 h2Data={featuredStoriesTitle} />
      <H2 h2Data={newsletterSignup} />
      <Text textData={newsletterDescription} />
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
