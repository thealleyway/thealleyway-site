import {
  InputFieldWrapper,
  SocialInformationContainer,
  SocialInfoTextWrapper,
} from '../StoryInquiryForm.styles';
import ArchModal from '../../../arch-modal/ArchModal';
import TextInputField from '../../../text-input-field/TextInputField';
import { H4, InputInfoText } from '../../../../style/typography';
import { getString } from '../../../../lib/richText';
import { fieldNames } from '../../../../lib/utils';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../../lib/intersectionObserver';
import { PlaceHolder } from '../../../base-components/BaseComponents';

export default function SocialInformation({
  fields,
  setFields,
  socialInformationSubtitle,
  venmoMoreInfoDescription,
  venmoMoreInfoSubtitle,
  isVenmoPolicyOpen,
  setIsVenmoPolicyOpen,
}) {
  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  if (visible) {
    return (
      <SocialInformationContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <H4>{getString(socialInformationSubtitle)}</H4>
        <InputFieldWrapper>
          <TextInputField
            id="website"
            label="Website"
            value={fields[fieldNames.WEBSITE] ? fields[fieldNames.WEBSITE] : ''}
            onChange={(e) => setFields({ ...fields, WEBSITE: e.target.value })}
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
            value={fields[fieldNames.TWITTER] ? fields[fieldNames.TWITTER] : ''}
            onChange={(e) => setFields({ ...fields, TWITTER: e.target.value })}
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
              setIsVenmoPolicyOpen(false);
            }}
          />
        )}
      </SocialInformationContainer>
    );
  }
  return <PlaceHolder ref={placeHolderRef}> </PlaceHolder>;
}
