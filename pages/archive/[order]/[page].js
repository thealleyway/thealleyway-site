import React from 'react';
import {
  getStoriesByPage,
  getStoryArchivePage,
  getNavigation,
  getFooter,
  getAuthorSignatureFromIDs,
} from '../../../lib/api';
import StoryArchivePage from '../../../components/storyArchivePage/StoryArchivePage';

export default function StoryArchive({
  storyArchivePageData,
  storiesData,
  sortingData,
  authorSignatures,
  navigationData,
  footerData,
  paginationData,
}) {
  return (
    <StoryArchivePage
      storyArchivePageData={storyArchivePageData}
      storiesData={storiesData}
      sortingData={sortingData}
      authorSignatures={authorSignatures}
      navigationData={navigationData}
      footerData={footerData}
      paginationData={paginationData}
    />
  );
}

export async function getStaticProps({ params }) {
  const storyArchivePageData = await getStoryArchivePage();
  const archiveStoriesData = await getStoriesByPage(params.page, params.order);
  const authorInfoIds = archiveStoriesData.results.map(
    (story) => story.data.author_info.id,
  );
  const authorSignatures = await getAuthorSignatureFromIDs(authorInfoIds);
  const stories = archiveStoriesData.results.map((story) => {
    return {
      id: story.id,
      uid: story.uid,
      preview_image: story.data.preview_image,
      story_title: story.data.story_title,
      story_date: story.data.story_date,
      author_info_id: story.data.author_info.id,
    };
  });
  const footerData = await getFooter();
  const navigationData = await getNavigation();
  const paginationData = {
    page: archiveStoriesData.page,
    totalPages: archiveStoriesData.total_pages,
  };

  return {
    props: {
      storyArchivePageData,
      storiesData: stories,
      sortingData: params.order,
      authorSignatures,
      footerData,
      navigationData,
      paginationData,
    },
  };
}

export async function getStaticPaths() {
  const storiesByPage = await getStoriesByPage(1, 'date');
  const arrayWithPageIndexes = [...new Array(storiesByPage.total_pages)].map(
    (_, index) => index + 1,
  );
  const paths = [
    ...arrayWithPageIndexes.map((index) => ({
      params: { order: 'date', page: `${index}` },
    })),
    ...arrayWithPageIndexes.map((index) => ({
      params: { order: 'alpha', page: `${index}` },
    })),
  ];
  return {
    paths,
    fallback: false,
  };
}
