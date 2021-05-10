import { getString } from '../../../../lib/richText';
import { icons } from '../../../../style/icons';
import { Overlay } from '../../../base-components/BaseComponents';
import {
  CloseIcon,
  MoreResourcesModalWrapper,
  MoreResourcesTitle,
  MoreResourcesLink,
} from './MoreResourcesModal.styles';

export default function MoreResourcesModal({
  onClose,
  moreResources,
  moreResourcesBackground,
}) {
  return (
    <>
      <Overlay showOverlay={true} />
      <MoreResourcesModalWrapper url={moreResourcesBackground.url}>
        <MoreResourcesTitle>More Resources</MoreResourcesTitle>
        {moreResources.map((resource, index) => (
          <MoreResourcesLink
            key={index}
            href={resource.link.url}
            target="_blank"
            rel="noreferrer"
          >
            {getString(resource.text)}
          </MoreResourcesLink>
        ))}
        <CloseIcon src={icons.CLOSE_ICON} alt="close icon" onClick={onClose} />
      </MoreResourcesModalWrapper>
    </>
  );
}
