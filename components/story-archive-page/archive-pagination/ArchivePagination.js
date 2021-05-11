import PageLink from '../../page-link/PageLink';
import { ArchiveArrow, PaginationWrapper } from './ArchivePagination.style';
import { P } from '../../../style/typography';
import { icons } from '../../../style/icons';
import React, { useState, useRef, useEffect } from "react";
import { registerObserver } from '../../../lib/intersectionObserver';
import { PlaceHolder } from '../../base-components/BaseComponents';

export default function ArchivePagination({ paginationData, sortType }) {
  const { totalPages, page } = paginationData;
  const prevDisabled = page == 1;
  const nextDisabled = page == totalPages;
  const ARCHIVE = `/archive/${sortType.toLowerCase()}/`;

  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  if (visible) {
    return (
      <PaginationWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", duration: 4 }}
      >
        <PageLink href={ARCHIVE + (page - 1) + '#archive'}>
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
        <PageLink href={ARCHIVE + (page + 1) + '#archive'}>
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
  return <PlaceHolder ref={placeHolderRef} />;
}
