import React from 'react';
import {
  getStoriesByPage,
  getStoryArchivePage,
  getNavigation,
  getFooter,
} from '../../lib/api';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import PageLink from '../../components/pageLink/PageLink';
import { H1Regular, H2, P } from '../../style/typography';
import { getString } from '../../lib/richText';

export default function StoryArchive({
  storyArchivePageData,
  stories,
  navigationData,
  footerData,
}) {
  const {
    archive_title_regular: archiveTitleRegular,
    archive_title_italic: archiveTitleItalic,
    archive_description: archiveDescription,
    archive_header_image: archiveHeaderImage,
  } = storyArchivePageData;

  return (
    <>
      <Navigation navigationData={navigationData} />
      <H1Regular>{getString(archiveTitleRegular)}</H1Regular>
      <H1Regular>
        <i>{getString(archiveTitleItalic)}</i>
      </H1Regular>
      <P>{getString(archiveDescription)}</P>
      <img src={archiveHeaderImage.url} alt={archiveHeaderImage.alt} />
      {stories.map((story, index) => {
        return <StoryPreview key={index} story={story} />;
      })}
      <Footer footerData={footerData} />
    </>
  );
}

function StoryPreview({ story }) {
  const {
    preview_image: previewImage,
    story_title: storyTitle,
    story_date: storyDate,
  } = story.data;
  const { uid } = story;
  return (
    <>
      <H2>{getString(storyTitle)}</H2>
      <P>{storyDate}</P>
      <PageLink href={'/story/' + uid}>
        <img
          style={{ width: '500px' }}
          src={previewImage.url}
          alt={previewImage.alt}
        />
      </PageLink>
    </>
  );
}

export async function getStaticPaths() {
  const storiesByPage = await getStoriesByPage(1);
  const arrayWithPageIndexes = [...new Array(storiesByPage.total_pages)].map(
    (_, index) => index + 1,
  );
  const paths = arrayWithPageIndexes.map((index) => ({
    params: { page: `${index}` },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const storyArchivePageData = await getStoryArchivePage();
  const { results } = await getStoriesByPage(params.page);
  const footerData = await getFooter();
  const navigationData = await getNavigation();

  return {
    props: {
      storyArchivePageData,
      stories: results,
      footerData,
      navigationData,
    },
  };
}
