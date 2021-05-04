import { getAuthorInfo, getStories, getStory } from '../../lib/api';
import StoryPage from '../../components/story-page/StoryPage';

export default function Story({ storyData, authorInfo }) {
  return <StoryPage storyData={storyData} authorInfo={authorInfo} />;
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
  const authorInfo = await getAuthorInfo(storyData.author_info.id);

  return {
    props: {
      storyData,
      authorInfo,
    },
  };
}
