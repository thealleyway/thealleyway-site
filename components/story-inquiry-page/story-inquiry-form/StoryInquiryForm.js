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
  RedStar,
  TextLabel,
  SocialInfoTextWrapper,
  SquareButtonWrapper,
  ErrorText,
} from './StoryInquiryForm.styles';
import SignatureCanvas from 'react-signature-canvas';
import React, { useState } from 'react';
import ArchModal from '../../arch-modal/ArchModal';
import { icons } from '../../../style/icons';
import MoreAboutPopup from '../../more-about-popup/MoreAboutPopup';
import ConfirmationPopup from '../../confirmation-popup/ConfirmationPopup';
import { Overlay } from '../../base-components/BaseComponents';
import { breakpointsObj } from '../../../lib/responsive';
import { useMatchMedia } from '../../../lib/hooks';
import { emailEndpoint, axiosConfig, proxyurl } from '../../../lib/utils';

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

  const isDesktop = useMatchMedia(
    `(min-width: ${breakpointsObj.desktop}px)`,
  );

  const getCanvasDimensions = () => {
    if (isDesktop) {
      return { width: 400, height: 60 }
    }
  }

  const clear = () => {
    sigPad.clear();
  };

  const [trimmedDataUrl, trim] = useState(null);
  const [sigPad, setSigPad] = useState({});
  const [isVenmoPolicyOpen, setIsVenmoPolicyOpen] = useState(false);
  const [isStoryConceptPopupOpen, setIsStoryConceptPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [additionalResources, setAdditionalResources] = useState([{id: 0, resource: ""}]);
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
 // console.log(trimmedDataUrl)

  const isValidSubmission = () => {
    let errors = {};
    let formIsValid = true;
    const validEmail = new RegExp(
      '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
    );
    if (fields['firstName'] == undefined || fields['firstName'].length < 1) {
      formIsValid = false;
      errors['firstName'] = 'FIRST NAME IS REQUIRED!';
    }
    if (!validEmail.test(fields['email'])) {
      formIsValid = false;
      errors['email'] = 'EMAIL IS REQUIRED!';
    }
    if (fields['storyConcept'] == undefined || fields['storyConcept'].length < 1) {
      formIsValid = false;
      errors['storyConcept'] = 'STORY CONCEPT IS REQUIRED!';
    }
    if (fields['petitionLink'] == undefined || fields['petitionLink'].length < 1) {
      formIsValid = false;
      errors['petitionLink'] = 'PETITION LINK IS REQUIRED!';
    }
    if (fields['donationPageLink'] == undefined || fields['donationPageLink'].length < 1) {
      formIsValid = false;
      errors['donationPageLink'] = 'DONATION PAGE LINK IS REQUIRED!';
    }
    if (fields['furtherEducationLink'] == undefined || fields['furtherEducationLink'].length < 1) {
      formIsValid = false;
      errors['furtherEducationLink'] = 'FURTHER EDUCATION LINK IS REQUIRED!';
    }
    setErrors(errors);
    return formIsValid;
  };
  

  

  // if (typeof window === 'object') {
   //  console.log(document.getElementById('signature canvas wrapper').offsetWidth)
  // };

 // console.log(additionalResources);

  return (
    <StoryInquiryFormContainer>
      <AuthorInformationContainer>
        <H4>{getString(authorInformationSubtitle)}</H4>
        <InputFieldWrapper>
          <TextInputField 
          id="firstName" 
          label="First Name"
          required
          showError={errors['firstName']}
          onChange={(e) => setFields({ ...fields, firstName: e })}
           />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField 
          id="lastName" 
          label="Last Name" 
          onChange={(e) => setFields({ ...fields, lastName: e })}
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField 
          id="email" 
          label="Email" 
          required
          showError={errors['email']}
          onChange={(e) => setFields({ ...fields, email: e })}
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
        {/* <SignatureCanvasWrapper id="signature canvas wrapper">
          <SignatureCanvas
            penColor="black"
            canvasProps={{ width: 400, height: 60}}
            ref={(ref) => setSigPad(ref)}
            minWidth={1.5}
            maxWidth={1.5}
          />
          <ErrorText>{errors["signature"]}</ErrorText>
        </SignatureCanvasWrapper> */}
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
          onChange={(e) => setFields({ ...fields, website: e })}
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField 
          id="instagram" 
          label="Instagram" 
          onChange={(e) => setFields({ ...fields, instagram: e })}
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField 
          id="twitter" 
          label="Twitter" 
          onChange={(e) => setFields({ ...fields, twitter: e })}
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField 
          id="venmo" 
          label="Venmo" 
          onChange={(e) => setFields({ ...fields, venmo: e })}
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
          placeholder="Copy and paste here"
          height="clamp(10em, 4vw, 26em)"
          label="Copy and paste text below"
          required
          onChange={(e) => setFields({ ...fields, storyConcept: e.target.value })}
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
          showError={errors['petitionLink']}
          onChange={(e) => setFields({ ...fields, petitionLink: e })}
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField
            id="donation page link"
            label="Donation page link"
            required
            showError={errors['donationPageLink']}
            onChange={(e) => setFields({ ...fields, donationPageLink: e })}
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField
            id="further education link"
            label="Further education link"
            required
            showError={errors['furtherEducationLink']}
            onChange={(e) => setFields({ ...fields, furtherEducationLink: e })}
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
        {additionalResources.map((r, index) => {
         // console.log(additionalResources);
        return <TextInputField
            key={index}
            id={"additional resource" + index}
            label={index == 0 ? "Additional Resources" : ""}
            isAdd={index == 0}
            hasIcon
            onChange={(e) => {}}
            //  console.log(additionalResources.map(r => 
              //  r.id == index ? console.log({index: r.id, resource: e}) : console.log(r)))}}
             // setAdditionalResources(additionalResources.map(r => 
              //r.id == index ? {index: r.id, resource: e} : r))}}
            addResource={() => setAdditionalResources(additionalResources.concat([{ id: index + 1, resource: ""}]))}
            deleteResource={() => setAdditionalResources([additionalResources.filter(r => r.id !== index)])}
            value={r.resource}
          />})}
        </InputFieldWrapper>
      </ResourceLinksContainer>
      <SquareButtonWrapper>
        <SquareButton
          buttonText="SUBMIT MY STORY"
          long={true}
          onClick={() => {
            trim(sigPad.getTrimmedCanvas().toDataURL('image/png').toString());
            console.log(trimmedDataUrl);
            //trim(sigPad.getTrimmedCanvas().toDataURL('image/png'));
            // if (submitRequest()) {
            //   document.body.style.overflow = 'hidden';
            //   document.getElementById('area').value = '';
            //   setFields({});
            //   setIsConfirmationPopupOpen(true);
            //   console.log(trimmedDataUrl);
            // }
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

  function submitRequest() {
    let lastName = fields['lastName'];
    if (!lastName) {
      lastName = '';
    }
    const name = `${fields['firstName']} ${lastName}`;
    const subject = `Story Inquiry - ${name}`;
    const body = `
    Name: ${name}\n
    Email: ${fields["email"]}\n
    Story Concept: ${fields["storyConcept"]}\n 
    Signature: ${trimmedDataUrl}\n
    Petition Link: ${fields["petitionLink"]}\n
    Donation Page Link: ${fields["donationPageLink"]}\n
    Further Education Link: ${fields["furtherEducationLink"]}\n
    `
    if (isValidSubmission()) {
      alert("success!")
      const request = `${emailEndpoint}?name=${fields['name']}&email=${fields['email']}&subject=${subject}&body=${body}`;
      axios
        .post(proxyurl + request, axiosConfig)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      return true;
    }
  }
}

