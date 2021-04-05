import {
  getAuthorInfo,
  getStories,
  getStory,
  getNavigation,
  getFooter,
} from '../../lib/api';
import SliceZone from '../../components/storySlices/sliceZone/SliceZone';
import AuthorInfo from '../../components/authorInfo/AuthorInfo';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import { H1Regular } from '../../style/typography';
import { getString } from '../../lib/richText';

export default function Story({
  storyData,
  authorInfo,
  navigationData,
  footerData,
}) {
  const { story_title: storyTitle, body } = storyData;

  return (
    <>
      <Navigation navigationData={navigationData} />
      <article>
        <H1Regular>
          <i>{getString(storyTitle)}</i>
        </H1Regular>
        <AuthorInfo authorInfo={authorInfo} />
        <SliceZone sliceZone={body} />
      </article>
      <Footer footerData={footerData} />
    </>
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
  const footerData = await getFooter();
  const navigationData = await getNavigation();

  return {
    props: {
      storyData,
      authorInfo,
      footerData,
      navigationData,
    },
  };
}
