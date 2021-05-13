import React, { useState } from 'react';
import { icons } from '../../../style/icons';
import PageLink from '../../page-link/PageLink';
import ProgressBar from '../progress-bar/ProgressBar';
import {
  BackToArchiveBannerWrapper,
  BackToArchiveImage,
  BackToArchiveText,
  ButtonWrapper,
} from './BackToArchiveBanner.styles';

export default function BackToArchiveBanner({ target, progressPercentage }) {
  const [backHover, setBackHover] = useState(false);

  return (
    <BackToArchiveBannerWrapper>
      <ButtonWrapper>
        <PageLink href="/archive" passHref>
          <BackToArchiveImage
            onMouseEnter={() => setBackHover(true)}
            onMouseLeave={() => setBackHover(false)}
            src={backHover ? icons.EXIT_BUTTON_HOVER : icons.EXIT_BUTTON}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
          />
        </PageLink>
      </ButtonWrapper>
      <BackToArchiveText>BACK TO ALL STORIES</BackToArchiveText>
      <ProgressBar
        target={target}
        isHorizontalScroll={true}
        progressPercentage={progressPercentage}
      />
    </BackToArchiveBannerWrapper>
  );
}
