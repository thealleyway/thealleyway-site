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
    <ArchModalWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', duration: 1 }}
    >
      <ArchModalContentWrapper>
        <ArchModalCloseButton onClick={onClose} whileHover={{ scale: 1.03 }}>
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
