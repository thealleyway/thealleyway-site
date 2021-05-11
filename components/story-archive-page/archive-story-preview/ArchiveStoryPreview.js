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
import React, { useState, useRef, useEffect } from "react";
import { registerObserver } from '../../../lib/intersectionObserver';
import { PlaceHolder } from '../../base-components/BaseComponents';
import { motion } from 'framer-motion';

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
  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  if (visible) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", duration: 4 }}>
        <PageLink href={storyUrl}
        >
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
      </motion.div>
    );
  }
  return <PlaceHolder ref={placeHolderRef} />;
}
