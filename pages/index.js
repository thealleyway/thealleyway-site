import {
  getHomePage,
  getNavigation,
  getFooter,
  getFeaturedStories,
} from '../lib/api';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import { H1, H2, P } from '../style/typography';
import { getString } from '../lib/richText';

export default function HomePage({
  homePageData,
  navigationData,
  footerData,
  featuredStoriesData,
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
      {featuredStoriesData.map((item) => (
        <div key={item.id}>
          <H2>{getString(item.storyTitle)}</H2>
          <P>{item.storyDate}</P>
          <img src={item.previewImage.url} alt={item.previewImage.alt} />
        </div>
      ))}
      <H2>{getString(newsletterSignup)}</H2>
      <P>{getString(newsletterDescription)}</P>
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
      footerData,
      navigationData,
      featuredStoriesData,
    },
  };
}
