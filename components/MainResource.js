import { getString } from '../lib/richText';
import { H3 } from '../style/typography';
export default function MainResource({ mainResourceData }) {
  const { resourceTitle } = mainResourceData;

  return <H3>{getString(resourceTitle)}</H3>;
}
