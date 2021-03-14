import { renderRichText } from "../lib/richText";
import { getHomePage } from "../lib/api";
import { PageLink } from "../lib/link";
import Link from "next/link";

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
      <PageLink href="/about">
        <p>About</p>
      </PageLink>
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
