import { getString } from '../../lib/richText';
import { icons } from '../../style/icons';
import {
  ArchFilledIn,
  ArchOutline,
  ArchModalCloseButton,
  ArchModalContentWrapper,
  ArchModalSpark,
  ArchModalText,
  ArchModalWrapper,
  CloseXImage,
} from './ArchModal.styles';

export default function ArchModal({ text, onClose }) {
  return (
    <ArchModalWrapper>
      <ArchModalContentWrapper>
        <ArchModalCloseButton onClick={onClose}>
          <CloseXImage src={icons.CLOSE_ICON} />
        </ArchModalCloseButton>
        <ArchModalSpark src={icons.FILLED_SPARK} />
        <ArchFilledIn />
        <ArchOutline />
        <ArchModalText>{getString(text)}</ArchModalText>
      </ArchModalContentWrapper>
    </ArchModalWrapper>
  );
}
