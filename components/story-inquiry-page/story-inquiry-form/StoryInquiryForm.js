import {
  StoryInquiryFormContainer,
  ScrollToSubmissionForm,
  FloatWrapper,
} from './StoryInquiryForm.styles';
import { fieldNames } from '../../../lib/utils';
import React, { useState } from 'react';
import ConfirmationPopup from '../../confirmation-popup/ConfirmationPopup';
import { Overlay } from '../../base-components/BaseComponents';
import { emailEndpoint, axiosConfig, proxyurl } from '../../../lib/utils';
import AuthorInformation from './author-information/AuthorInformation';
import AuthorSignature from './author-signature/AuthorSignature';
import SocialInformation from './social-information/SocialInformation';
import StoryConcept from './story-concept/StoryConcept';
import ResourceLinks from './resource-links/ResourceLinks';
import { useValidEmail } from '../../../lib/hooks';
import {
  SubmitButton,
  SubmitButtonContainer,
} from '../../base-components/BaseComponents';
import { colors } from '../../../style/colors';

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

  const isValidSubmission = () => {
    let errors = {};
    let formIsValid = true;

    if (
      fields[fieldNames.FIRST_NAME] == undefined ||
      fields[fieldNames.FIRST_NAME].length === 0
    ) {
      formIsValid = false;
      errors[fieldNames.FIRST_NAME] = 'FIRST NAME IS REQUIRED!';
    }
    if (
      fields[fieldNames.EMAIL] == undefined ||
      fields[fieldNames.EMAIL].length === 0
    ) {
      formIsValid = false;
      errors[fieldNames.EMAIL] = 'EMAIL IS REQUIRED!';
    } else if (useValidEmail(fields[fieldNames.EMAIL])) {
      formIsValid = false;
      errors[fieldNames.EMAIL] = 'INVALID EMAIL!';
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
        <AuthorSignature
          authorSignatureSubtitle={authorSignatureSubtitle}
          authorSignatureDescription={authorSignatureDescription}
          errors={errors}
          clear={clear}
          setSigPad={setSigPad}
          trim={trim}
          sigPad={sigPad}
        />
        <SocialInformation
          fields={fields}
          setFields={setFields}
          socialInformationSubtitle={socialInformationSubtitle}
          venmoMoreInfoDescription={venmoMoreInfoDescription}
          venmoMoreInfoSubtitle={venmoMoreInfoSubtitle}
          isVenmoPolicyOpen={isVenmoPolicyOpen}
          setIsVenmoPolicyOpen={setIsVenmoPolicyOpen}
        />
        <StoryConcept
          fields={fields}
          errors={errors}
          setFields={setFields}
          storyConceptBoxSubtitle={storyConceptBoxSubtitle}
          storyConceptDescription={storyConceptDescription}
          storyConceptPopupData={storyConceptPopupData}
          storyConceptSubtitle={storyConceptSubtitle}
          isStoryConceptPopupOpen={isStoryConceptPopupOpen}
          setIsStoryConceptPopupOpen={setIsStoryConceptPopupOpen}
        />
        <ResourceLinks
          fields={fields}
          setFields={setFields}
          resourceLinksDescription={resourceLinksDescription}
          resourceLinksSubtitle={resourceLinksSubtitle}
          setAdditionalResources={setAdditionalResources}
          errors={errors}
          additionalResources={additionalResources}
        />
        <FloatWrapper>
          <SubmitButtonContainer
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            long
          >
            <SubmitButton
              color={colors.WHITE}
              type="submit"
              role="button"
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
            >
              SUBMIT MY STORY
            </SubmitButton>
          </SubmitButtonContainer>
        </FloatWrapper>
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
