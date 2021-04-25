import PageLink from '../../page-link/PageLink';
import { ArchiveArrow, PaginationWrapper } from './ArchivePagination.style';
import { P } from '../../../style/typography';
import { icons } from '../../../style/icons';

export default function ArchivePagination({ paginationData, sortType }) {
  const { totalPages, page } = paginationData;
  const prevDisabled = page == 1;
  const nextDisabled = page == totalPages;
  const ARCHIVE = `/archive/${sortType.toLowerCase()}/`;

  return (
    <PaginationWrapper>
      <PageLink href={ARCHIVE + (page - 1)}>
        <ArchiveArrow
          src={icons.FILLED_SHORT_ARROW}
          disabled={prevDisabled}
          previous={true}
          alt=""
        />
      </PageLink>
      <P>
        {page} / {totalPages}
      </P>
      <PageLink href={ARCHIVE + (page + 1)}>
        <ArchiveArrow
          src={icons.FILLED_SHORT_ARROW}
          disabled={nextDisabled}
          previous={false}
          alt=""
        />
      </PageLink>
    </PaginationWrapper>
  );
}
