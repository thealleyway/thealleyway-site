import styled from 'styled-components';
import { max } from '../../lib/responsive';

const STORY_SPACING = 48;

const H1StyledContainer = styled.div`
  margin-left: -1.5em;
`;

const ArchiveContainer = styled.div`
  padding-top: clamp(7em, 10vw, 8.5em);

  @media only screen and ${max.tabletSm} {
    padding-top: clamp(2em, 22vw, 7em);
  }

  @media only screen and ${max.mobile} {
    padding-top: 1em;
  }
`;

const ArchiveSortingWrapper = styled.div`
  width: clamp(12em, 25vw, 16em);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.5em;

  @media only screen and ${max.tabletLg} {
    width: clamp(18em, 100vw, 20em);
  }

  @media only screen and ${max.mobile} {
    width: 26em;
  }
`;

const SortingPaginationWrapper = styled.div`
  flex: 100%;
  display: flex;
  flex-direction: row;
  max-width: 70em;
  margin: 0 auto;
  justify-content: space-between;
  align-items: flex-end;

  @media only screen and ${max.desktop} {
    max-width: 65em;
  }

  @media only screen and ${max.tabletLg} {
    margin: 0 calc(${STORY_SPACING}px * 1.3);
  }

  @media only screen and ${max.tabletSm} {
    margin: 0
      clamp(
        calc(${STORY_SPACING}px * 0.25),
        3vw,
        calc(${STORY_SPACING}px * 0.5)
      );
  }
`;

const StoriesWrapper = styled.div`
  flex: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
`;

const FooterPaginationWrapper = styled(SortingPaginationWrapper)`
  justify-content: flex-end;
  margin-top: calc(${STORY_SPACING}px * -1.5);

  @media only screen and ${max.tabletLg} {
    margin-top: calc(${STORY_SPACING}px * -1);
  }

  @media only screen and ${max.tabletSm} {
    margin-top: calc(${STORY_SPACING}px * -0.25);
  }
`;

export {
  H1StyledContainer,
  ArchiveContainer,
  ArchiveSortingWrapper,
  StoriesWrapper,
  SortingPaginationWrapper,
  FooterPaginationWrapper,
  STORY_SPACING,
};
