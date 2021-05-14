import React, { useState } from 'react';
import { colors } from '../../../style/colors';
import {
  fieldNames,
  MESSAGE_LENGTH_MINIMUM,
  sendStoryEmail,
} from '../../../lib/utils';
import { useValidEmail } from '../../../lib/hooks';
import {
  Overlay,
  SubmitButton,
  SubmitButtonContainer,
} from '../../base-components/BaseComponents';
import ConfirmationPopup from '../../confirmation-popup/ConfirmationPopup';
import AuthorInformation from './author-information/AuthorInformation';
import AuthorSignature from './author-signature/AuthorSignature';
import SocialInformation from './social-information/SocialInformation';
import StoryConcept from './story-concept/StoryConcept';
import ResourceLinks from './resource-links/ResourceLinks';
import {
  StoryInquiryFormContainer,
  ScrollToSubmissionForm,
  FloatWrapper,
} from './StoryInquiryForm.styles';

const getDisplayString = (value) => value || 'N/A';

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

    if (!fields[fieldNames.FIRST_NAME]) {
      formIsValid = false;
      errors[fieldNames.FIRST_NAME] = 'FIRST NAME IS REQUIRED!';
    }
    if (!fields[fieldNames.EMAIL]) {
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
      !fields[fieldNames.STORY_CONCEPT] ||
      fields[fieldNames.STORY_CONCEPT].length < MESSAGE_LENGTH_MINIMUM
    ) {
      formIsValid = false;
      errors[
        fieldNames.STORY_CONCEPT
      ] = `STORY CONCEPT MUST BE AT LEAST ${MESSAGE_LENGTH_MINIMUM} CHARACTERS`;
    }
    if (!fields[fieldNames.PETITION_LINK]) {
      formIsValid = false;
      errors[fieldNames.PETITION_LINK] = 'PETITION LINK IS REQUIRED!';
    }
    if (!fields[fieldNames.DONATION_PAGE_LINK]) {
      formIsValid = false;
      errors[fieldNames.DONATION_PAGE_LINK] = 'DONATION PAGE LINK IS REQUIRED!';
    }
    if (!fields[fieldNames.FURTHER_EDUCATION_LINK]) {
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

  const submitRequest = async () => {
    if (isValidSubmission()) {
      let lastName = fields[fieldNames.LAST_NAME] || '';
      const name = `${fields[fieldNames.FIRST_NAME]} ${lastName}`;
      const details = `Name: ${getDisplayString(
        name,
      )}\nEmail: ${getDisplayString(
        fields[fieldNames.EMAIL],
      )}\nStory Concept: ${getDisplayString(
        fields[fieldNames.STORY_CONCEPT],
      )}\nWebsite: ${getDisplayString(
        fields[fieldNames.WEBSITE],
      )}\nInstagram: ${getDisplayString(
        fields[fieldNames.INSTAGRAM],
      )}\nTwitter: ${getDisplayString(
        fields[fieldNames.TWITTER],
      )}\nVenmo: ${getDisplayString(
        fields[fieldNames.VENMO],
      )}\nPetition Link: ${getDisplayString(
        fields[fieldNames.PETITION_LINK],
      )}\nDonation Page Link: ${getDisplayString(
        fields[fieldNames.DONATION_PAGE_LINK],
      )}\nFurther Education Link: ${getDisplayString(
        fields[fieldNames.FURTHER_EDUCATION_LINK],
      )}\nAdditional Resources: ${additionalResources.map(
        (r) => r.RESOURCE + '\n',
      )}\nSignature: ${trimmedDataUrl}\n`;

      try {
        const subject = `Story Inquiry: ${name}`;
        await sendStoryEmail(name, subject, fields[fieldNames.EMAIL], details);
        return true;
      } catch (error) {
        alert(
          `Error submitting story inquiry, please try again later. \n${error.message}`,
        );
        return false;
      }
    }
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
              color={colors.FRESHSNOW}
              type="submit"
              role="button"
              long
              onClick={async () => {
                const response = await submitRequest();
                if (response) {
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
}
