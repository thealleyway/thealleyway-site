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
    { id: 0, resource: '' },
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
    if (fields['firstName'] == undefined || fields['firstName'].length === 0) {
      formIsValid = false;
      errors['firstName'] = 'FIRST NAME IS REQUIRED!';
    }
    if (!validEmail.test(fields['email'])) {
      formIsValid = false;
      errors['email'] = 'EMAIL IS REQUIRED!';
    }
    if (trimmedDataUrl == null) {
      formIsValid = false;
      errors['signature'] = 'SIGNATURE IS REQUIRED!';
    }
    if (
      fields['storyConcept'] == undefined ||
      fields['storyConcept'].length === 0
    ) {
      formIsValid = false;
      errors['storyConcept'] = 'STORY CONCEPT IS REQUIRED!';
    }
    if (
      fields['petitionLink'] == undefined ||
      fields['petitionLink'].length === 0
    ) {
      formIsValid = false;
      errors['petitionLink'] = 'PETITION LINK IS REQUIRED!';
    }
    if (
      fields['donationPageLink'] == undefined ||
      fields['donationPageLink'].length === 0
    ) {
      formIsValid = false;
      errors['donationPageLink'] = 'DONATION PAGE LINK IS REQUIRED!';
    }
    if (
      fields['furtherEducationLink'] == undefined ||
      fields['furtherEducationLink'].length === 0
    ) {
      formIsValid = false;
      errors['furtherEducationLink'] = 'FURTHER EDUCATION LINK IS REQUIRED!';
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
        <AuthorInformationContainer>
          <H4>{getString(authorInformationSubtitle)}</H4>
          <InputFieldWrapper>
            <TextInputField
              id="firstName"
              label="First Name"
              required
              showError={errors['firstName']}
              value={fields['firstName']}
              onChange={(e) =>
                setFields({ ...fields, firstName: e.target.value })
              }
            />
          </InputFieldWrapper>
          <InputFieldWrapper>
            <TextInputField
              id="lastName"
              label="Last Name"
              value={fields['lastName']}
              onChange={(e) =>
                setFields({ ...fields, lastName: e.target.value })
              }
            />
          </InputFieldWrapper>
          <InputFieldWrapper>
            <TextInputField
              id="email"
              label="Email"
              required
              showError={errors['email']}
              value={fields['email']}
              onChange={(e) => setFields({ ...fields, email: e.target.value })}
            />
          </InputFieldWrapper>
        </AuthorInformationContainer>
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
            <ErrorText>{errors['signature']}</ErrorText>
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
              value={fields['website']}
              onChange={(e) =>
                setFields({ ...fields, website: e.target.value })
              }
            />
          </InputFieldWrapper>
          <InputFieldWrapper>
            <TextInputField
              id="instagram"
              label="Instagram"
              value={fields['instagram']}
              onChange={(e) =>
                setFields({ ...fields, instagram: e.target.value })
              }
            />
          </InputFieldWrapper>
          <InputFieldWrapper>
            <TextInputField
              id="twitter"
              label="Twitter"
              value={fields['twitter']}
              onChange={(e) =>
                setFields({ ...fields, twitter: e.target.value })
              }
            />
          </InputFieldWrapper>
          <InputFieldWrapper>
            <TextInputField
              id="venmo"
              label="Venmo"
              value={fields['venmo']}
              onChange={(e) => setFields({ ...fields, venmo: e.target.value })}
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
              setFields({ ...fields, storyConcept: e.target.value })
            }
            showError={errors['storyConcept']}
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
              value={fields['petitionLink']}
              showError={errors['petitionLink']}
              onChange={(e) =>
                setFields({ ...fields, petitionLink: e.target.value })
              }
            />
          </InputFieldWrapper>
          <InputFieldWrapper>
            <TextInputField
              id="donation page link"
              label="Donation page link"
              required
              value={fields['donationPageLink']}
              showError={errors['donationPageLink']}
              onChange={(e) =>
                setFields({ ...fields, donationPageLink: e.target.value })
              }
            />
          </InputFieldWrapper>
          <InputFieldWrapper>
            <TextInputField
              id="further education link"
              label="Further education link"
              required
              value={fields['furtherEducationLink']}
              showError={errors['furtherEducationLink']}
              onChange={(e) =>
                setFields({ ...fields, furtherEducationLink: e.target.value })
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
                          ? { id: element.id, resource: e.target.value }
                          : element,
                      ),
                    );
                  }}
                  addResource={() =>
                    setAdditionalResources((previous) => [
                      ...previous,
                      { id: uuidv4(), resource: '' },
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
    let lastName = fields['lastName'];
    if (!lastName) {
      lastName = '';
    }
    const name = `${fields['firstName']} ${lastName}`;
    const subject = `Story Inquiry - ${name}`;
    const body = `Name: ${name}%0
    Email: ${fields['email']}%0
    Story Concept: ${fields['storyConcept']}%0A
    Website: ${fields['website']}%0A
    Instagram: ${fields['instagram']}%0A
    Twitter: ${fields['twitter']}%0A
    Venmo: ${fields['venmo']}%0A
    Petition Link: ${fields['petitionLink']}%0A
    Donation Page Link: ${fields['donationPageLink']}%0A
    Further Education Link: ${fields['furtherEducationLink']}%0A
    Additional Resources: ${additionalResources.map(
      (r, index) => '%0A' + index + 1 + '. ' + r.resource + '%0A',
    )}%0A%0A%0A
    Signature: ${trimmedDataUrl}%0A
    `;
    if (isValidSubmission()) {
      const request = `${emailEndpoint}?name=${fields['name']}&email=${fields['email']}&subject=${subject}&body=${body}`;
      axios
        .post(proxyurl + request, axiosConfig)
        .then((response) => {
          return response;
          //console.log(response);
        })
        .catch((error) => {
          return error;
          //console.log(error);
        });
      return true;
    }
  }
}
