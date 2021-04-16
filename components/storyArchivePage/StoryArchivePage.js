import React from 'react';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import ArchiveStoryPreview from './archiveStoryPreview/ArchiveStoryPreview';
import ArchivePagination from './archivePagination/ArchivePagination';
import ArchiveSorting from './archiveSorting/ArchiveSorting';
import {
  H1StyledContainer,
  ArchiveContainer,
  ArchiveSortingWrapper,
  StoriesWrapper,
  SortingPaginationWrapper,
  FooterPaginationWrapper,
} from './StoryArchivePage.style';
import H1Styled from '../H1Styled/H1Styled';
import PageDescription from '../pageDescription/PageDescription';

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
  } = storyArchivePageData;

  const sortType = sortingData == DATE.toLowerCase() ? DATE : ALPHA;

  const StoryPreviews = storiesData.map((story) => {
    const signature = authorSignatures[story.author_info_id];
    return (
      <ArchiveStoryPreview key={story.id} story={story} signature={signature} />
    );
  });

  return (
    <>
      <Navigation navigationData={navigationData} />
      <H1StyledContainer>
        <H1Styled
          regular={archiveTitleRegular}
          italicized={archiveTitleItalic}
        />
      </H1StyledContainer>
      <PageDescription
        description={archiveDescription}
        arrowText="EXPLORE THE ARCHIVE"
        img={archiveHeaderImage}
      />
      <ArchiveContainer>
        <SortingPaginationWrapper>
          <ArchiveSortingWrapper>
            <ArchiveSorting order={DATE} sortType={sortType} />
            <ArchiveSorting order={ALPHA} sortType={sortType} />
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
