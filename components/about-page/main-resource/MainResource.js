import { getString } from '../../../lib/richText';
import OvalButton from '../../oval-button/OvalButton';

export default function MainResource({ mainResourceData }) {
  const { resourceTitle, resourceLink } = mainResourceData;

  return (
    <OvalButton
      buttonText={getString(resourceTitle).toUpperCase()}
      href={resourceLink.url}
      onClick={() => window.open(resourceLink.url, '_blank')}
    />
  );
}
