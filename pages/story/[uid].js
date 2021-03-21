import { getAuthorInfo, getStories, getStory } from "../../lib/api";
import { renderRichText } from "../../lib/richText";
import SliceZone from "../../components/storySlices/SliceZone";
import AuthorInfo from "../../components/AuthorInfo";

export default function Story({ storyData, authorInfo }) {
  const {
    story_title: storyTitle,
    story_date: storyDate,
    body,
  } = storyData;

  return (
    <article>
      <header>{renderRichText(storyTitle)}</header>
      <AuthorInfo authorInfo={authorInfo} />
      <SliceZone sliceZone={body} />
    </article>
  );
}

export async function getStaticPaths() {
  const stories = await getStories();
  const paths = stories.map((story) => ({
    params: {
      uid: story.uid,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const storyData = await getStory(params.uid);
  const authorInfo = await getAuthorInfo(storyData.author_info.id)
  return {
    props: {
      storyData,
      authorInfo
    },
  };
}
