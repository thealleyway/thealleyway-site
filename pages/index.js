import {
  getHomePage,
  getNavigation,
  getFooter,
  getFeaturedStories,
} from '../lib/api';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import FeaturedStoryPreview from '../components/FeaturedStoryPreview';
import { H1, H2, P } from '../style/typography';
import { getString } from '../lib/richText';

export default function HomePage({
  homePageData,
  featuredStoriesData,
  navigationData,
  footerData,
}) {
  const {
    home_page_title: homePageTitle,
    featured_stories_title: featuredStoriesTitle,
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
      {featuredStoriesData.map((item) => {
        return <FeaturedStoryPreview key={item.uid} featuredStoryData={item} />;
      })}
      <Footer footerData={footerData} />
    </>
  );
}

export async function getStaticProps() {
  const homePageData = await getHomePage();
  const footerData = await getFooter();
  const navigationData = await getNavigation();
  const featuredStoriesIds = homePageData.featured_stories.map((item) => {
    return item.story.id;
  });
  const featuredStoriesData = await getFeaturedStories(featuredStoriesIds);

  return {
    props: {
      homePageData,
      featuredStoriesData,
      navigationData,
      footerData,
    },
  };
}
