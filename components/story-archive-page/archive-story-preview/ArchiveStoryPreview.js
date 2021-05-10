import React from 'react';
import moment from 'moment';
import { getString } from '../../../lib/richText';
import { icons } from '../../../style/icons';
import { breakpointsObj } from '../../../lib/responsive';
import PageLink from '../../page-link/PageLink';
import {
  StoryPreviewContainer,
  StoryPreviewImage,
  StoryPreviewTitle,
  StoryPreviewArrow,
  StoryPreviewSignature,
  StoryPreviewHover,
  DateArrowWrapper,
  DateWrapper,
} from './ArchiveStoryPreview.style';
import { useMatchMedia } from '../../../lib/hooks';

export default function ArchiveStoryPreview({ story, signature }) {
  const {
    preview_image: previewImage,
    story_title: storyTitle,
    story_date: storyDate,
    uid,
  } = story;

  const storyUrl = '/story/' + uid;
  const formattedDate = moment(storyDate).format('MM/DD');
  const isTabletOrMobile = useMatchMedia(
    `(max-width: ${breakpointsObj.tabletLg}px)`,
  );

  return (
    <PageLink href={storyUrl}>
      <StoryPreviewContainer>
        <StoryPreviewImage src={previewImage.url} alt={previewImage.alt} />
        <StoryPreviewHover>
          <DateArrowWrapper>
            <DateWrapper>{formattedDate}</DateWrapper>
            <StoryPreviewArrow src={icons.UNFILLED_MEDIUM_ARROW} />
          </DateArrowWrapper>
          {!isTabletOrMobile && (
            <PageLink href={storyUrl}>
              <StoryPreviewSignature src={signature.url} alt={signature.alt} />
            </PageLink>
          )}
        </StoryPreviewHover>
        <StoryPreviewTitle>{getString(storyTitle)}</StoryPreviewTitle>
      </StoryPreviewContainer>
    </PageLink>
  );
}
