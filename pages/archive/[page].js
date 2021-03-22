import React from "react";
import { renderRichText } from "../../lib/richText";
import { getStoriesByPage, getStoryArchivePage, getNavigation, getFooter } from "../../lib/api";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import H1 from "../../components/headers/H1";

export default function StoryArchive({
  storyArchivePageData,
  stories,
  navigationData,
  footerData,
}) {
  const {
    archive_description: archiveDescription,
    archive_title: archiveTitle,
  } = storyArchivePageData;

  return (
    <>
      <Navigation navigationData={navigationData} />
      <H1 h1Data={archiveTitle} />
      {renderRichText(archiveDescription)}
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
  return (
    <>
      {renderRichText(storyTitle)}
      <p>{storyDate}</p>
      <img style={{ width: "500px" }} src={previewImage.url} alt={previewImage.alt} />
    </>
  );
}

export async function getStaticPaths() {
  const storiesByPage = await getStoriesByPage(1);
  const arrayWithPageIndexes = Array.from(
    Array(storiesByPage.total_pages),
    (_, index) => index + 1
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
