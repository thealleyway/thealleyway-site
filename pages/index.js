import React from 'react';
import {
  getAuthorSignatureFromIDs,
  getHomePage,
  getFooter,
  getNavigation,
} from '../lib/api';
import HomePage from '../components/home-page/HomePage';

export default function Home({
  authorSignatures,
  homePageData,
  navigationData,
  footerData,
}) {
  return (
    <HomePage
      authorSignatures={authorSignatures}
      homePageData={homePageData}
      navigationData={navigationData}
      footerData={footerData}
    />
  );
}

export async function getStaticProps() {
  const homePageData = await getHomePage();
  const footerData = await getFooter();
  const navigationData = await getNavigation();
  const authorInfoIDs = homePageData.featured_stories.map(
    (story) => story.story.data.author_info.id,
  );
  const authorSignatures = await getAuthorSignatureFromIDs(authorInfoIDs);

  return {
    props: {
      authorSignatures,
      homePageData,
      navigationData,
      footerData,
    },
  };
}
