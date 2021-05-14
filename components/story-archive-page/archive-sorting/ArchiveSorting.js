import PageLink from '../../page-link/PageLink';
import {
  SortLabelWrapper,
  SortLabel,
  SortUnderline,
} from './ArchiveSorting.style';
import { icons } from '../../../style/icons';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';
import { PlaceHolder } from '../../base-components/BaseComponents';
import { colors } from '../../../style/colors';

const ALPHA = 'alpha';
const DATE = 'date';

const sortUrl = (selectedSortType) =>
  '/archive/' + selectedSortType.toLowerCase() + '/' + 1 + '#archive';

export default function ArchiveSorting({ sortType, order }) {
  const label = order == DATE ? 'MOST RECENT' : 'A - Z';
  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  if (visible) {
    return (
      <SortLabelWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', duration: 4 }}
      >
        <PageLink href={sortUrl(order)}>
          <SortLabel selected={sortType == order} color={colors.BROWN}>
            {label}
          </SortLabel>
        </PageLink>
        <SortUnderline
          enabled={sortType == order}
          src={icons.ALMOST_STRAIGHT_SCRIBBLE}
          alpha={ALPHA == order}
          alt=""
        />
      </SortLabelWrapper>
    );
  }
  return <PlaceHolder ref={placeHolderRef} />;
}
