import React from 'react';
import SliceZone from '../../components/story-slices/slice-zone/SliceZone';
import StoryHero from './story-hero/StoryHero';
import { StoryPageWrapper } from './StoryPage.styles';

export default function StoryPage({ storyData, authorInfo }) {
  const {
    story_title: storyTitle,
    story_date: storyDate,
    body,
    primary_image_1: primaryImage1,
    primary_image_2: primaryImage2,
    primary_image_3: primaryImage3,
    donate_link: donateLink,
  } = storyData;

  return (
    <StoryPageWrapper>
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
    </StoryPageWrapper>
  );
}
