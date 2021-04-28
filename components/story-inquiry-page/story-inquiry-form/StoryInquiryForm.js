import TextInputField from '../../text-input-field/TextInputField';
import TextInputBox from '../../text-input-box/TextInputBox';
import SquareButton from '../../square-button/SquareButton';
import { H3, P } from '../../../style/typography';
import { getString } from '../../../lib/richText';
import {
    StoryInquiryFormContainer,
    StoryConceptContainer,
    SocialInformationContainer,
    InputFieldWrapper,
    AuthorInformationContainer,
    AuthorSignatureContainer,
    Description,
    InputBoxWrapper
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
    } = storyInquiryFormData


    return (
        <StoryInquiryFormContainer>
            <AuthorInformationContainer>
                <H3>{getString(authorInformationSubtitle)}</H3>
                <InputFieldWrapper>
                    <TextInputField id="firstName" label="First Name" />
                </InputFieldWrapper>
                <InputFieldWrapper>
                    <TextInputField id="lastName" label="Last Name" />
                </InputFieldWrapper>
                <InputFieldWrapper>
                    <TextInputField id="email" label="Email" />
                </InputFieldWrapper>
            </AuthorInformationContainer>
            <AuthorSignatureContainer>
                <H3>{getString(authorSignatureSubtitle)}</H3>
                <Description>{getString(authorSignatureDescription)}</Description>
            </AuthorSignatureContainer>
            <SocialInformationContainer>
                <H3>{getString(socialInformationSubtitle)}</H3>
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
                <H3>{getString(storyConceptSubtitle)}</H3>
                <Description>{getString(storyConceptDescription)}</Description>
                <InputBoxWrapper>
                <TextInputBox placeholder="Copy and paste here" />
                </InputBoxWrapper>

            </StoryConceptContainer>

        </StoryInquiryFormContainer>
    )
}