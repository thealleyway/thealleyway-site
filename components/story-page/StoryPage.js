import React, { createRef } from 'react';
import { useMatchMedia } from '../../lib/hooks';
import { breakpointsObj } from '../../lib/responsive';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import SliceZone from '../../components/story-slices/slice-zone/SliceZone';
import StoryHero from './story-hero/StoryHero';
import TakeAction from './take-action/TakeAction';
import BackToArchiveBanner from './back-to-archive-banner/BackToArchiveBanner';
import ProgressBar from './progress-bar/ProgressBar';
import { StoryPageWrapper } from './StoryPage.styles';

export default function StoryPage({
  storyData,
  authorInfo,
  navigationData,
  footerData,
}) {
  const {
    story_title: storyTitle,
    story_date: storyDate,
    body,
    primary_image_1: primaryImage1,
    primary_image_2: primaryImage2,
    primary_image_3: primaryImage3,
    donate_link: donateLink,
    learn_link: learnLink,
    sign_link: signLink,
    take_action_description: takeActionDescription,
    more_resources: moreResources,
    more_resources_background: moreResourcesBackground,
  } = storyData;

  const target = createRef();

  const isTabletOrMobile = useMatchMedia(
    `(max-width: ${breakpointsObj.tabletLg}px)`,
  );

  return (
    <>
      {isTabletOrMobile ? (
        <>
          <Navigation navigationData={navigationData} />
          <ProgressBar target={target} isHorizontalScroll={false} />
        </>
      ) : (
        <BackToArchiveBanner target={target} />
      )}

      <StoryPageWrapper ref={target}>
        <StoryHero
          authorInfo={authorInfo}
          storyTitle={storyTitle}
          storyDate={storyDate}
          primaryImage1={primaryImage1}
          primaryImage2={primaryImage2}
          primaryImage3={primaryImage3}
          donateLink={donateLink}
        />
        <SliceZone sliceZone={body} />
        <TakeAction
          takeActionDescription={takeActionDescription}
          donateLink={donateLink}
          learnLink={learnLink}
          signLink={signLink}
          moreResources={moreResources}
          moreResourcesBackground={moreResourcesBackground}
        />
      </StoryPageWrapper>
      {isTabletOrMobile && <Footer footerData={footerData} />}
    </>
  );
}
