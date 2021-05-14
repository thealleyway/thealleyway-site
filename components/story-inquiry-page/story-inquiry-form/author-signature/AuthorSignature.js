import {
  AuthorSignatureContainer,
  ClearSignatureWrapper,
  SignatureCanvasWrapper,
  Description,
  StarLabelContainer,
  TextLabel,
  ErrorText,
} from '../StoryInquiryForm.styles';
import { getString } from '../../../../lib/richText';
import { fieldNames } from '../../../../lib/utils';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../../lib/intersectionObserver';
import SignatureCanvas from 'react-signature-canvas';
import { RedStar } from '../../../base-components/BaseComponents';
import { icons } from '../../../../style/icons';
import useResizeObserver from 'use-resize-observer';
import { H4, InputInfoText } from '../../../../style/typography';
import { PlaceHolder } from '../../../base-components/BaseComponents';

export default function AuthorSignature({
  authorSignatureSubtitle,
  authorSignatureDescription,
  errors,
  clear,
  trim,
  sigPad,
  setSigPad,
}) {
  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const { ref, width: canvasWidth } = useResizeObserver();

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  if (visible) {
    return (
      <AuthorSignatureContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <H4>{getString(authorSignatureSubtitle)}</H4>
        <Description>{getString(authorSignatureDescription)}</Description>
        <StarLabelContainer>
          <TextLabel>Signature</TextLabel>
          <RedStar src={icons.RED_STAR} />
        </StarLabelContainer>
        <SignatureCanvasWrapper id="signature canvas wrapper" ref={ref}>
          <SignatureCanvas
            penColor="white"
            canvasProps={{ width: canvasWidth, height: canvasWidth / 2.6 }}
            ref={(ref) => setSigPad(ref)}
            minWidth={1.5}
            maxWidth={1.5}
            onEnd={() => trim(sigPad.getTrimmedCanvas().toDataURL('image/png'))}
          />
          <ErrorText>{errors[fieldNames.SIGNATURE]}</ErrorText>
        </SignatureCanvasWrapper>
        <ClearSignatureWrapper>
          <InputInfoText onClick={clear}>Reset</InputInfoText>
        </ClearSignatureWrapper>
      </AuthorSignatureContainer>
    );
  }
  return <PlaceHolder ref={placeHolderRef}> </PlaceHolder>;
}
