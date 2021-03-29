import { getHomePage, getNavigation, getFooter } from "../lib/api";
import Navigation from "../components/navgation/Navigation";
import Footer from "../components/footer/Footer";
import { H1, H2, P } from "../style/typography";
import { getString } from "../lib/richText";

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
      <H1>{getString(homePageTitle)}</H1>
      <H2>{getString(featuredStoriesTitle)}</H2>
      <H2>{getString(newsletterSignup)}</H2>
      <P>{getString(newsletterDescription)}</P>
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
