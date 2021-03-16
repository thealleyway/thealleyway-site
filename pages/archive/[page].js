import React from "react";
import { renderRichText } from "../../lib/richText";
import { getStoriesByPage, getStoryArchivePage } from "../../lib/api";

export default function StoryArchive({ storyArchivePageData, stories }) {
  const {
    archive_description: archiveDescription,
    archive_title: archiveTitle,
  } = storyArchivePageData;

  return (
    <>
      {renderRichText(archiveTitle)}
      {renderRichText(archiveDescription)}
      {stories.map((story, index) => {
        return <StoryPreview key={index} story={story} />;
      })}
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
      <img
        style={{ width: "500px" }}
        src={previewImage.url}
        alt={previewImage.alt}
      />
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
  return {
    props: {
      storyArchivePageData,
      stories: results,
    },
  };
}
