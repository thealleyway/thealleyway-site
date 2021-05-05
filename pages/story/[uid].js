import {
  getAuthorInfo,
  getStories,
  getStory,
  getNavigation,
  getFooter,
} from '../../lib/api';
import StoryPage from '../../components/story-page/StoryPage';

export default function Story({
  storyData,
  authorInfo,
  navigationData,
  footerData,
}) {
  return (
    <StoryPage
      storyData={storyData}
      authorInfo={authorInfo}
      navigationData={navigationData}
      footerData={footerData}
    />
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
  const authorInfo = await getAuthorInfo(storyData.author_info.id);
  const navigationData = await getNavigation();
  const footerData = await getFooter();

  return {
    props: {
      storyData,
      authorInfo,
      navigationData,
      footerData,
    },
  };
}
