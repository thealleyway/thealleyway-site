import React, { createRef, useState } from 'react';
import { useMatchMedia } from '../../lib/hooks';
import { breakpointsObj } from '../../lib/responsive';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import SliceZone from '../../components/story-slices/slice-zone/SliceZone';
import StoryHero from './story-hero/StoryHero';
import TakeAction from './take-action/TakeAction';
import BackToArchiveBanner from './back-to-archive-banner/BackToArchiveBanner';
import ProgressBar from './progress-bar/ProgressBar';
import TakeActionModal from './take-action-modal/TakeActionModal';
import HorizontalScroll from './horizontal-scroll/HorizontalScroll';
import {
  StoryPageWrapper,
  HorizontalContentContainer,
  HorizontalSection,
} from './StoryPage.styles';

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
    modal_background: modalBackground,
  } = storyData;

  const isTabletOrMobile = useMatchMedia(
    `(max-width: ${breakpointsObj.tabletLg}px)`,
  );
  const target = createRef();
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const content = (
    <>
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
        moreResourcesBackground={modalBackground}
      />
    </>
  );

  if (isTabletOrMobile) {
    return (
      <>
        <Navigation navigationData={navigationData} />
        <ProgressBar target={target} isHorizontalScroll={false} />
        <StoryPageWrapper ref={target}>{content}</StoryPageWrapper>
        <Footer footerData={footerData} />
      </>
    );
  }

  return (
    <>
      <HorizontalSection>
        <BackToArchiveBanner
          target={target}
          progressPercentage={Math.min(
            100,
            (translateX / (dynamicHeight - 800)) * -100,
          )}
        />
        <HorizontalScroll
          dynamicHeight={dynamicHeight}
          setDynamicHeight={setDynamicHeight}
          translateX={translateX}
          setTranslateX={setTranslateX}
          target={target}
        >
          <HorizontalContentContainer>{content}</HorizontalContentContainer>
        </HorizontalScroll>
        <TakeActionModal
          takeActionDescription={takeActionDescription}
          donateLink={donateLink}
          learnLink={learnLink}
          signLink={signLink}
          modalBackground={modalBackground}
        />
      </HorizontalSection>
    </>
  );

  // {/* <BackToArchiveBanner target={target} />
  //     <StoryPageWrapper ref={target}>
  //       {content}
  //       {!isTabletOrMobile && (
  //         <TakeActionModal
  //           takeActionDescription={takeActionDescription}
  //           donateLink={donateLink}
  //           learnLink={learnLink}
  //           signLink={signLink}
  //           modalBackground={modalBackground}
  //         />
  //       )}
  //     </StoryPageWrapper> */}
  // return (
  //   <>
  //     {isTabletOrMobile ? (
  //       <>
  //         <Navigation navigationData={navigationData} />
  //         <ProgressBar target={target} isHorizontalScroll={false} />
  //       </>
  //     ) : (
  //       <BackToArchiveBanner target={target} />
  //     )}
  //     <StoryPageWrapper ref={target}>
  //       <HorizontalScroll style={{ height: '100vh', width: '100vw' }}>
  //         <StoryHero
  //           authorInfo={authorInfo}
  //           storyTitle={storyTitle}
  //           storyDate={storyDate}
  //           primaryImage1={primaryImage1}
  //           primaryImage2={primaryImage2}
  //           primaryImage3={primaryImage3}
  //           donateLink={donateLink}
  //         />
  //         <SliceZone sliceZone={body} />
  //         <TakeAction
  //           takeActionDescription={takeActionDescription}
  //           donateLink={donateLink}
  //           learnLink={learnLink}
  //           signLink={signLink}
  //           moreResources={moreResources}
  //           moreResourcesBackground={modalBackground}
  //         />
  //         {!isTabletOrMobile && (
  //           <TakeActionModal
  //             takeActionDescription={takeActionDescription}
  //             donateLink={donateLink}
  //             learnLink={learnLink}
  //             signLink={signLink}
  //             modalBackground={modalBackground}
  //           />
  //         )}
  //       </HorizontalScroll>
  //     </StoryPageWrapper>
  //     {isTabletOrMobile && <Footer footerData={footerData} />}
  //   </>
  // );
}
