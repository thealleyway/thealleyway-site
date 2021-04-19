import { getString } from '../../../../lib/richText';
import { icons } from '../../../../style/icons';
import {
  PrivacyPolicyModalArch,
  PrivacyPolicyModalArchOutline,
  PrivacyPolicyModalCloseButton,
  PrivacyPolicyModalContentWrapper,
  PrivacyPolicyModalSpark,
  PrivacyPolicyText,
  PrivacyPolicyModalWrapper,
  X,
} from './PrivacyPolicyModal.styles';

export default function PrivacyPolicyModal({ privacyPolicyText, onClose }) {
  return (
    <PrivacyPolicyModalWrapper>
      <PrivacyPolicyModalContentWrapper>
        <PrivacyPolicyModalCloseButton onClick={onClose}>
          <X src={icons.X} />
        </PrivacyPolicyModalCloseButton>
        <PrivacyPolicyModalSpark src={icons.FILLED_SPARK} />
        <PrivacyPolicyModalArch />
        <PrivacyPolicyModalArchOutline />
        <PrivacyPolicyText>{getString(privacyPolicyText)}</PrivacyPolicyText>
      </PrivacyPolicyModalContentWrapper>
    </PrivacyPolicyModalWrapper>
  );
}
