import TextInputField from '../../text-input-field/TextInputField';
import TextInputBox from '../../text-input-box/TextInputBox';
import SquareButton from '../../square-button/SquareButton';
import { H4, P } from '../../../style/typography';
import { getString } from '../../../lib/richText';
import {
  StoryInquiryFormContainer,
  StoryConceptContainer,
  SocialInformationContainer,
  InputFieldWrapper,
  AuthorInformationContainer,
  AuthorSignatureContainer,
  Description,
  InputBoxWrapper,
  ResourceLinksContainer,
  Subtitle,
} from './StoryInquiryForm.styles';

export default function StoryInquiryForm({ storyInquiryFormData }) {
  const {
    authorInformationSubtitle,
    authorSignatureSubtitle,
    authorSignatureDescription,
    socialInformationSubtitle,
    venmoMoreInfoSubtitle,
    venmoMoreInfoDescription,
    storyConceptSubtitle,
    storyConceptDescription,
    resourceLinksSubtitle,
    resourceLinksDescription,
  } = storyInquiryFormData;

  return (
    <StoryInquiryFormContainer>
      <AuthorInformationContainer>
        <Subtitle>{getString(authorInformationSubtitle)}</Subtitle>
        <InputFieldWrapper>
          <TextInputField id="firstName" label="First Name" required={true} />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField id="lastName" label="Last Name" />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField id="email" label="Email" required={true} />
        </InputFieldWrapper>
      </AuthorInformationContainer>
      <AuthorSignatureContainer>
        <Subtitle>{getString(authorSignatureSubtitle)}</Subtitle>
        <Description>{getString(authorSignatureDescription)}</Description>
      </AuthorSignatureContainer>
      <SocialInformationContainer>
        <Subtitle>{getString(socialInformationSubtitle)}</Subtitle>
        <InputFieldWrapper>
          <TextInputField id="website" label="Website" />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField id="instagram" label="Instagram" />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField id="twitter" label="Twitter" />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField id="venmo" label="Venmo" />
        </InputFieldWrapper>
      </SocialInformationContainer>
      <StoryConceptContainer>
        <Subtitle>{getString(storyConceptSubtitle)}</Subtitle>
        <Description>{getString(storyConceptDescription)}</Description>
        <InputBoxWrapper>
          <TextInputBox
            placeholder="Copy and paste here"
            height="clamp(10em, 4vw, 26em)"
          />
        </InputBoxWrapper>
      </StoryConceptContainer>
      <ResourceLinksContainer>
        <Subtitle>{getString(resourceLinksSubtitle)}</Subtitle>
        <Description>{getString(resourceLinksDescription)}</Description>
      </ResourceLinksContainer>
    </StoryInquiryFormContainer>
  );
}
