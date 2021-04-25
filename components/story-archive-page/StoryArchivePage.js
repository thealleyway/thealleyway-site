import React from 'react';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import ArchiveStoryPreview from './archive-story-preview/ArchiveStoryPreview';
import ArchivePagination from './archive-pagination/ArchivePagination';
import ArchiveSorting from './archive-sorting/ArchiveSorting';
import {
  HeaderandSquiggleContainer,
  SquiggleUnderline,
  ArchiveContainer,
  ArchiveSortingWrapper,
  StoriesWrapper,
  SortingPaginationWrapper,
  FooterPaginationWrapper,
} from './StoryArchivePage.style';
import H1Styled from '../h1-styled/H1Styled';
import PageDescription from '../page-description/PageDescription';
import { icons } from '../../style/icons';

const ALPHA = 'alpha';
const DATE = 'date';

export default function StoryArchivePage({
  storyArchivePageData,
  storiesData,
  sortingData,
  authorSignatures,
  navigationData,
  footerData,
  paginationData,
}) {
  const {
    archive_title_regular: archiveTitleRegular,
    archive_title_italic: archiveTitleItalic,
    archive_description: archiveDescription,
    archive_header_image: archiveHeaderImage,
    spark_arrow_description_text: sparkArrowDescriptionText,
  } = storyArchivePageData;

  const sortType = sortingData == DATE.toLowerCase() ? DATE : ALPHA;
  const ariaSort = (label) => {
    if (label == ALPHA && label == sortType) {
      return 'ascending';
    } else if (label == DATE && label == sortType) {
      return 'decscending';
    } else {
      return 'none';
    }
  };

  const StoryPreviews = storiesData.map((story) => {
    const signature = authorSignatures[story.author_info_id];
    return (
      <ArchiveStoryPreview key={story.id} story={story} signature={signature} />
    );
  });

  return (
    <>
      <Navigation navigationData={navigationData} />
      <HeaderandSquiggleContainer>
        <H1Styled
          regular={archiveTitleRegular}
          italicized={archiveTitleItalic}
        />
        <SquiggleUnderline src={icons.REFINED_SQUIGGLE} />
      </HeaderandSquiggleContainer>
      <PageDescription
        description={archiveDescription}
        arrowText={sparkArrowDescriptionText}
        img={archiveHeaderImage}
      />
      <ArchiveContainer>
        <SortingPaginationWrapper>
          <ArchiveSortingWrapper>
            <ArchiveSorting
              order={DATE}
              sortType={sortType}
              aria-sort={ariaSort(DATE)}
            />
            <ArchiveSorting
              order={ALPHA}
              sortType={sortType}
              aria-sort={ariaSort(ALPHA)}
            />
          </ArchiveSortingWrapper>
          <ArchivePagination
            paginationData={paginationData}
            sortType={sortType}
          />
        </SortingPaginationWrapper>
        <StoriesWrapper>{StoryPreviews}</StoriesWrapper>
        <FooterPaginationWrapper>
          <ArchivePagination
            paginationData={paginationData}
            sortType={sortType}
          />
        </FooterPaginationWrapper>
      </ArchiveContainer>
      <Footer footerData={footerData} />
    </>
  );
}
