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
  AuthorSignatureContainer,
  Description,
  ResourceLinksContainer,
  StoryConceptInfoTextWrapper,
  SignatureCanvasWrapper,
  ClearSignatureWrapper,
  StarLabelContainer,
  TextLabel,
  SocialInfoTextWrapper,
  SquareButtonWrapper,
  ErrorText,
  ScrollToSubmissionForm,
} from './StoryInquiryForm.styles';
import { fieldNames } from '../../../lib/utils';
import { RedStar } from '../../base-components/BaseComponents';
import SignatureCanvas from 'react-signature-canvas';
import React, { useState } from 'react';
import ArchModal from '../../arch-modal/ArchModal';
import { icons } from '../../../style/icons';
import MoreAboutPopup from '../../more-about-popup/MoreAboutPopup';
import ConfirmationPopup from '../../confirmation-popup/ConfirmationPopup';
import { Overlay } from '../../base-components/BaseComponents';
import { emailEndpoint, axiosConfig, proxyurl } from '../../../lib/utils';
import { v4 as uuidv4 } from 'uuid';
import useResizeObserver from 'use-resize-observer';
import AuthorInformation from './author-information/AuthorInformation';

const axios = require('axios');

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

  const [trimmedDataUrl, trim] = useState(null);
  const [sigPad, setSigPad] = useState({});
  const [isVenmoPolicyOpen, setIsVenmoPolicyOpen] = useState(false);
  const [isStoryConceptPopupOpen, setIsStoryConceptPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [additionalResources, setAdditionalResources] = useState([
    { id: 0, RESOURCE: '' },
  ]);
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const { ref, width: canvasWidth } = useResizeObserver();

  const isValidSubmission = () => {
    let errors = {};
    let formIsValid = true;
    const validEmail = new RegExp(
      '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
    );
    if (
      fields[fieldNames.FIRST_NAME] == undefined ||
      fields[fieldNames.FIRST_NAME].length === 0
    ) {
      formIsValid = false;
      errors[fieldNames.FIRST_NAME] = 'FIRST NAME IS REQUIRED!';
    }
    if (!validEmail.test(fields[fieldNames.EMAIL])) {
      formIsValid = false;
      errors[fieldNames.EMAIL] = 'EMAIL IS REQUIRED!';
    }
    if (trimmedDataUrl == null) {
      formIsValid = false;
      errors[fieldNames.SIGNATURE] = 'SIGNATURE IS REQUIRED!';
    }
    if (
      fields[fieldNames.STORY_CONCEPT] == undefined ||
      fields[fieldNames.STORY_CONCEPT].length === 0
    ) {
      formIsValid = false;
      errors[fieldNames.STORY_CONCEPT] = 'STORY CONCEPT IS REQUIRED!';
    }
    if (
      fields[fieldNames.PETITION_LINK] == undefined ||
      fields[fieldNames.PETITION_LINK].length === 0
    ) {
      formIsValid = false;
      errors[fieldNames.PETITION_LINK] = 'PETITION LINK IS REQUIRED!';
    }
    if (
      fields[fieldNames.DONATION_PAGE_LINK] == undefined ||
      fields[fieldNames.DONATION_PAGE_LINK].length === 0
    ) {
      formIsValid = false;
      errors[fieldNames.DONATION_PAGE_LINK] = 'DONATION PAGE LINK IS REQUIRED!';
    }
    if (
      fields[fieldNames.FURTHER_EDUCATION_LINK] == undefined ||
      fields[fieldNames.FURTHER_EDUCATION_LINK].length === 0
    ) {
      formIsValid = false;
      errors[fieldNames.FURTHER_EDUCATION_LINK] =
        'FURTHER EDUCATION LINK IS REQUIRED!';
    }
    setErrors(errors);
    return formIsValid;
  };

  const clear = () => {
    sigPad.clear();
    trim(null);
  };

  return (
    <>
      <ScrollToSubmissionForm id="submission form" />
      <StoryInquiryFormContainer>
        <AuthorInformation
          authorInformationSubtitle={authorInformationSubtitle}
          fields={fields}
          errors={errors}
          setFields={setFields}
        />
        <AuthorSignatureContainer>
          <H4>{getString(authorSignatureSubtitle)}</H4>
          <Description>{getString(authorSignatureDescription)}</Description>
          <StarLabelContainer>
            <TextLabel>Signature</TextLabel>
            <RedStar src={icons.RED_STAR} />
          </StarLabelContainer>
          <SignatureCanvasWrapper id="signature canvas wrapper" ref={ref}>
            <SignatureCanvas
              penColor="white"
              canvasProps={{ width: canvasWidth, height: 60 }}
              ref={(ref) => setSigPad(ref)}
              minWidth={1.5}
              maxWidth={1.5}
              onEnd={() =>
                trim(sigPad.getTrimmedCanvas().toDataURL('image/png'))
              }
            />
            <ErrorText>{errors[fieldNames.SIGNATURE]}</ErrorText>
          </SignatureCanvasWrapper>
          <ClearSignatureWrapper>
            <InputInfoText onClick={clear}>Reset</InputInfoText>
          </ClearSignatureWrapper>
        </AuthorSignatureContainer>
        <SocialInformationContainer>
          <H4>{getString(socialInformationSubtitle)}</H4>
          <InputFieldWrapper>
            <TextInputField
              id="website"
              label="Website"
              value={
                fields[fieldNames.WEBSITE] ? fields[fieldNames.WEBSITE] : ''
              }
              onChange={(e) =>
                setFields({ ...fields, WEBSITE: e.target.value })
              }
            />
          </InputFieldWrapper>
          <InputFieldWrapper>
            <TextInputField
              id="instagram"
              label="Instagram"
              value={
                fields[fieldNames.INSTAGRAM] ? fields[fieldNames.INSTAGRAM] : ''
              }
              onChange={(e) =>
                setFields({ ...fields, INSTAGRAM: e.target.value })
              }
            />
          </InputFieldWrapper>
          <InputFieldWrapper>
            <TextInputField
              id="twitter"
              label="Twitter"
              value={
                fields[fieldNames.TWITTER] ? fields[fieldNames.TWITTER] : ''
              }
              onChange={(e) =>
                setFields({ ...fields, TWITTER: e.target.value })
              }
            />
          </InputFieldWrapper>
          <InputFieldWrapper>
            <TextInputField
              id="venmo"
              label="Venmo"
              value={fields[fieldNames.VENMO] ? fields[fieldNames.VENMO] : ''}
              onChange={(e) => setFields({ ...fields, VENMO: e.target.value })}
            />
          </InputFieldWrapper>
          <SocialInfoTextWrapper>
            <InputInfoText
              onClick={() => {
                document.body.style.overflow = 'hidden';
                setIsVenmoPolicyOpen(true);
              }}
            >
              {getString(venmoMoreInfoSubtitle)}
            </InputInfoText>
          </SocialInfoTextWrapper>
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
            id="area"
            placeholder="Copy and paste here"
            height="clamp(10em, 4vw, 26em)"
            label="Copy and paste text below"
            required
            onChange={(e) =>
              setFields({ ...fields, STORY_CONCEPT: e.target.value })
            }
            showError={errors[fieldNames.STORY_CONCEPT]}
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
            <TextInputField
              id="petition link"
              label="Petition link"
              required
              value={
                fields[fieldNames.PETITION_LINK]
                  ? fields[fieldNames.PETITION_LINK]
                  : ''
              }
              showError={errors[fieldNames.PETITION_LINK]}
              onChange={(e) =>
                setFields({ ...fields, PETITION_LINK: e.target.value })
              }
            />
          </InputFieldWrapper>
          <InputFieldWrapper>
            <TextInputField
              id="donation page link"
              label="Donation page link"
              required
              value={
                fields[fieldNames.DONATION_PAGE_LINK]
                  ? fields[fieldNames.DONATION_PAGE_LINK]
                  : ''
              }
              showError={errors[fieldNames.DONATION_PAGE_LINK]}
              onChange={(e) =>
                setFields({ ...fields, DONATION_PAGE_LINK: e.target.value })
              }
            />
          </InputFieldWrapper>
          <InputFieldWrapper>
            <TextInputField
              id="further education link"
              label="Further education link"
              required
              value={
                fields[fieldNames.FURTHER_EDUCATION_LINK]
                  ? fields[fieldNames.FURTHER_EDUCATION_LINK]
                  : ''
              }
              showError={errors[fieldNames.FURTHER_EDUCATION_LINK]}
              onChange={(e) =>
                setFields({ ...fields, FURTHER_EDUCATION_LINK: e.target.value })
              }
            />
          </InputFieldWrapper>
          <InputFieldWrapper>
            {additionalResources.map((r, index) => {
              return (
                <TextInputField
                  key={r.id}
                  id={'additional resource' + r.id}
                  label={index === 0 ? 'Additional Resources' : ''}
                  isAdd={index === 0}
                  hasIcon
                  onChange={(e) => {
                    setAdditionalResources((previous) =>
                      previous.map((element) =>
                        r.id === element.id
                          ? { id: element.id, RESOURCE: e.target.value }
                          : element,
                      ),
                    );
                  }}
                  addResource={() =>
                    setAdditionalResources((previous) => [
                      ...previous,
                      { id: uuidv4(), RESOURCE: '' },
                    ])
                  }
                  deleteResource={() =>
                    setAdditionalResources((previous) =>
                      previous.filter((resource) => r.id !== resource.id),
                    )
                  }
                  value={r.resource}
                />
              );
            })}
          </InputFieldWrapper>
        </ResourceLinksContainer>
        <SquareButtonWrapper>
          <SquareButton
            buttonText="SUBMIT MY STORY"
            long
            onClick={() => {
              if (submitRequest()) {
                document.body.style.overflow = 'hidden';
                document.querySelector('#area').value = '';
                setFields({});
                clear();
                setIsConfirmationPopupOpen(true);
              }
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
    </>
  );

  function submitRequest() {
    let lastName = fields[fieldNames.LAST_NAME];
    if (!lastName) {
      lastName = '';
    }
    const name = `${fields[fieldNames.FIRST_NAME]} ${lastName}`;
    const subject = `Story Inquiry - ${name}`;
    const body = `Name: ${name}%0
    Email: ${fields[fieldNames.EMAIL]}%0
    Story Concept: ${fields[fieldNames.STORY_CONCEPT]}%0A
    Website: ${fields[fieldNames.WEBSITE]}%0A
    Instagram: ${fields[fieldNames.INSTAGRAM]}%0A
    Twitter: ${fields[fieldNames.TWITTER]}%0A
    Venmo: ${fields[fieldNames.VENMO]}%0A
    Petition Link: ${fields[fieldNames.PETITION_LINK]}%0A
    Donation Page Link: ${fields[fieldNames.DONATION_PAGE_LINK]}%0A
    Further Education Link: ${fields[fieldNames.FURTHER_EDUCATION_LINK]}%0A
    Additional Resources: ${additionalResources.map(
      (r, index) => '%0A' + index + 1 + '. ' + r.RESOURCE + '%0A',
    )}%0A%0A%0A
    Signature: ${trimmedDataUrl}%0A
    `;
    if (isValidSubmission()) {
      const request = `${emailEndpoint}?name=${fields['name']}&email=${
        fields[fieldNames.EMAIL]
      }&subject=${subject}&body=${body}`;
      axios
        .post(proxyurl + request, axiosConfig)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error;
        });
      return true;
    }
  }
}
