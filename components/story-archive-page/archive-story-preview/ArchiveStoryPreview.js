import React, { useState } from 'react';
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
  const [hover, setHover] = useState(false);

  return (
    <PageLink href={storyUrl}>
      <StoryPreviewContainer
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <StoryPreviewImage src={previewImage.url} alt={previewImage.alt} />
        <StoryPreviewHover>
          <DateArrowWrapper
            animate={{ opacity: hover ? 1 : 0 }}
            transition={{ duration: 0.6 }}
          >
            <DateWrapper>{formattedDate}</DateWrapper>
            <StoryPreviewArrow src={icons.UNFILLED_MEDIUM_ARROW} />
          </DateArrowWrapper>
          {!isTabletOrMobile && (
            <PageLink href={storyUrl}>
              <StoryPreviewSignature
                src={signature.url}
                alt={signature.alt}
                animate={{ opacity: hover ? 1 : 0 }}
                transition={{ duration: 0.6 }}
              />
            </PageLink>
          )}
        </StoryPreviewHover>
        <StoryPreviewTitle>{getString(storyTitle)}</StoryPreviewTitle>
      </StoryPreviewContainer>
    </PageLink>
  );
}
