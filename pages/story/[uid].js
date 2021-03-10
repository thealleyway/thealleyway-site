import { getStories, getStory } from "../../lib/api";
import { renderRichText } from "../../lib/richText";
import SliceZone from "../../components/slices/SliceZone";

export default function Story({ storyData }) {
  const {
    story_title: storyTitle,
    story_date: storyDate,
    author_info: authorInfo,
    body,
  } = storyData;

  return (
    <article>
      <header>{renderRichText(storyTitle)}</header>
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
  return {
    props: {
      storyData,
    },
  };
}
