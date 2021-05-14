import {
  AuthorInformationContainer,
  InputFieldWrapper,
} from '../StoryInquiryForm.styles';
import TextInputField from '../../../text-input-field/TextInputField';
import { H4 } from '../../../../style/typography';
import { getString } from '../../../../lib/richText';
import { fieldNames } from '../../../../lib/utils';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../../lib/intersectionObserver';
import { PlaceHolder } from '../../../base-components/BaseComponents';

export default function AuthorInformation({
  authorInformationSubtitle,
  fields,
  errors,
  setFields,
}) {
  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  if (visible) {
    return (
      <AuthorInformationContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <H4>{getString(authorInformationSubtitle)}</H4>
        <InputFieldWrapper>
          <TextInputField
            id="firstName"
            label="First Name"
            required
            showError={errors[fieldNames.FIRST_NAME]}
            value={
              fields[fieldNames.FIRST_NAME] ? fields[fieldNames.FIRST_NAME] : ''
            }
            onChange={(e) =>
              setFields({ ...fields, FIRST_NAME: e.target.value })
            }
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField
            id="lastName"
            label="Last Name"
            value={
              fields[fieldNames.LAST_NAME] ? fields[fieldNames.LAST_NAME] : ''
            }
            onChange={(e) =>
              setFields({ ...fields, LAST_NAME: e.target.value })
            }
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextInputField
            id="email"
            label="Email"
            required
            showError={errors[fieldNames.EMAIL]}
            value={fields[fieldNames.EMAIL] ? fields[fieldNames.EMAIL] : ''}
            onChange={(e) => setFields({ ...fields, EMAIL: e.target.value })}
          />
        </InputFieldWrapper>
      </AuthorInformationContainer>
    );
  }
  return <PlaceHolder ref={placeHolderRef}> </PlaceHolder>;
}
