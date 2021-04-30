import TextInputField from '../../text-input-field/TextInputField';
import TextInputBox from '../../text-input-box/TextInputBox';
import SquareButton from '../../square-button/SquareButton';
import { H4, InputInfoText } from '../../../style/typography';
import { getString } from '../../../lib/richText';
import {
  StoryInquiryFormContainer,
  StoryConceptContainer,
  SocialInformationContainer,
  InputFieldWrapper,
  AuthorInformationContainer,
  AuthorSignatureContainer,
  Description,
  ResourceLinksContainer,
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
        <H4>{getString(authorInformationSubtitle)}</H4>
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
        <H4>{getString(authorSignatureSubtitle)}</H4>
        <Description>{getString(authorSignatureDescription)}</Description>
      </AuthorSignatureContainer>
      <SocialInformationContainer>
        <H4>{getString(socialInformationSubtitle)}</H4>
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
        <InputInfoText>{getString(venmoMoreInfoSubtitle)}</InputInfoText>
      </SocialInformationContainer>
      <StoryConceptContainer>
        <H4>{getString(storyConceptSubtitle)}</H4>
        <Description>{getString(storyConceptDescription)}</Description>
        <TextInputBox
          placeholder="Copy and paste here"
          height="clamp(10em, 4vw, 26em)"
        />
      </StoryConceptContainer>
      <ResourceLinksContainer>
        <H4>{getString(resourceLinksSubtitle)}</H4>
        <Description>{getString(resourceLinksDescription)}</Description>
      </ResourceLinksContainer>
    </StoryInquiryFormContainer>
  );
}
