import {
    PlaceHolder,
    StoryConceptInfoTextWrapper,
    StoryConceptContainer,
    Description
} from '../StoryInquiryForm.styles';
import { H4, InputInfoText } from '../../../../style/typography';
import { getString } from '../../../../lib/richText';
import { fieldNames } from '../../../../lib/utils';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../../lib/intersectionObserver';
import MoreAboutPopup from '../../../more-about-popup/MoreAboutPopup';
import TextInputBox from '../../../text-input-box/TextInputBox';

export default function StoryConcept({
    fields,
    errors,
    setFields,
    storyConceptBoxSubtitle,
    storyConceptDescription,
    storyConceptPopupData,
    storyConceptSubtitle,
    isStoryConceptPopupOpen,
    setIsStoryConceptPopupOpen,
}) {
    const placeHolderRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        registerObserver(placeHolderRef.current, setVisible);
    }, []);

    if (visible) {
        return (
            <StoryConceptContainer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
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
        );
    }
    return <PlaceHolder ref={placeHolderRef}> </PlaceHolder>;
}
