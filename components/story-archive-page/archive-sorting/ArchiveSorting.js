import PageLink from '../../page-link/PageLink';
import {
  SortLabelWrapper,
  SortLabel,
  SortUnderline,
} from './ArchiveSorting.style';
import { icons } from '../../../style/icons';

const ALPHA = 'alpha';
const DATE = 'date';

const sortUrl = (selectedSortType) =>
  '/archive/' + selectedSortType.toLowerCase() + '/' + 1 + '#archive';

export default function ArchiveSorting({ sortType, order }) {
  const label = order == DATE ? 'MOST RECENT' : 'A - Z';
  return (
    <SortLabelWrapper>
      <PageLink href={sortUrl(order)}>
        <SortLabel enabled={sortType == order}>{label}</SortLabel>
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
