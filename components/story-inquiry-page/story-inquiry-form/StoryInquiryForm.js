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
  InfoTextWrapper,
  StoryConceptInfoTextWrapper,
  SignatureCanvasWrapper,
  ClearSignatureWrapper,
  StarLabelContainer,
  RedStar,
  TextLabel,
  SquareButtonWrapper,
} from './StoryInquiryForm.styles';
import SignatureCanvas from 'react-signature-canvas';
import React, { useState } from 'react';
import ArchModal from '../../arch-modal/ArchModal';
import { icons } from '../../../style/icons';
import MoreAboutPopup from '../../more-about-popup/MoreAboutPopup';
import ConfirmationPopup from '../../confirmation-popup/ConfirmationPopup';
import { Overlay } from '../../base-components/BaseComponents';

export default function StoryInquiryForm({
  storyInquiryFormData,
  storyConceptPopupData,
  storySubmissionConfirmationData,
}) {
  const {
    authorInformationSubtitle,
    authorSignatureSubtitle,
    authorSignatureDescription,
    socialInformationSubtitle,
    venmoMoreInfoSubtitle,
    venmoMoreInfoDescription,
    storyConceptSubtitle,
    storyConceptDescription,
    storyConceptBoxSubtitle,
    resourceLinksSubtitle,
    resourceLinksDescription,
  } = storyInquiryFormData;

  const clear = () => {
    sigPad.clear();
  };
  const [trimmedDataUrl, trim] = useState(null);
  const [sigPad, setSigPad] = useState({});
  const [isVenmoPolicyOpen, setIsVenmoPolicyOpen] = useState(false);
  const [isStoryConceptPopupOpen, setIsStoryConceptPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);

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
        <StarLabelContainer>
          <TextLabel>Signature</TextLabel>
          <RedStar src={icons.RED_STAR} />
        </StarLabelContainer>
        <SignatureCanvasWrapper>
          <SignatureCanvas
            penColor="black"
            //      canvasProps={{ width: 450, height: 60 }}
            canvasProps={{ width: 200, height: 60 }}
            ref={(ref) => setSigPad(ref)}
            minWidth={1.5}
            maxWidth={1.5}
          />
        </SignatureCanvasWrapper>
        <ClearSignatureWrapper>
          <InputInfoText onClick={clear}>Reset</InputInfoText>
        </ClearSignatureWrapper>
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
        <InfoTextWrapper>
          <InputInfoText
            onClick={() => {
              document.body.style.overflow = 'hidden';
              setIsVenmoPolicyOpen(true);
            }}
          >
            {getString(venmoMoreInfoSubtitle)}
          </InputInfoText>
        </InfoTextWrapper>
        {isVenmoPolicyOpen && (
          <ArchModal
            text={venmoMoreInfoDescription}
            onClose={() => {
              document.body.style.overflow = 'visible';
              setIsVenmoPolicyOpen(false);
            }}
          />
        )}
      </SocialInformationContainer>
      <StoryConceptContainer>
        <H4>{getString(storyConceptSubtitle)}</H4>
        <Description>{getString(storyConceptDescription)}</Description>
        <TextInputBox
          placeholder="Copy and paste here"
          height="clamp(10em, 4vw, 26em)"
          label="Copy and paste text below"
          required={true}
        />
        <StoryConceptInfoTextWrapper>
          <InputInfoText
            onClick={() => {
              document.body.style.overflow = 'hidden';
              setIsStoryConceptPopupOpen(true);
            }}
          >
            {getString(storyConceptBoxSubtitle)}
          </InputInfoText>
        </StoryConceptInfoTextWrapper>
        {isStoryConceptPopupOpen && (
          <MoreAboutPopup
            popupData={storyConceptPopupData}
            setIsPopupOpen={setIsStoryConceptPopupOpen}
          />
        )}
      </StoryConceptContainer>
      <ResourceLinksContainer>
        <H4>{getString(resourceLinksSubtitle)}</H4>
        <Description>{getString(resourceLinksDescription)}</Description>
        <InputFieldWrapper>
          <TextInputField id="petition link" label="Petition link" required />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField
            id="donation page link"
            label="Donation page link"
            required
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField
            id="further education link"
            label="Further education link"
            required
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField
            id="additional resource"
            label="Additional Resources"
            isAdd
            hasIcon
          />
        </InputFieldWrapper>
      </ResourceLinksContainer>
      <SquareButtonWrapper>
        <SquareButton
          buttonText="SUBMIT MY STORY"
          long={true}
          onClick={() => {
            sigPad && trim(sigPad.getTrimmedCanvas().toDataURL('image/png'));
            setIsConfirmationPopupOpen(true);
          }}
        />
      </SquareButtonWrapper>
      {isConfirmationPopupOpen && (
        <ConfirmationPopup
          confirmationData={storySubmissionConfirmationData}
          togglePopup={setIsConfirmationPopupOpen}
          page="inquiry"
        />
      )}
      <Overlay
        showOverlay={
          isVenmoPolicyOpen ||
          isStoryConceptPopupOpen ||
          isConfirmationPopupOpen
        }
      />
    </StoryInquiryFormContainer>
  );
}
