import {
    InputFieldWrapper,
    PlaceHolder,
    Description,
    ResourceLinksContainer,
} from '../StoryInquiryForm.styles';
import TextInputField from '../../../text-input-field/TextInputField';
import { H4 } from '../../../../style/typography';
import { getString } from '../../../../lib/richText';
import { fieldNames } from '../../../../lib/utils';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../../lib/intersectionObserver';
import { v4 as uuidv4 } from 'uuid';

export default function ResourceLinks({
    fields,
    setFields,
    resourceLinksDescription,
    resourceLinksSubtitle,
    setAdditionalResources,
    errors,
    additionalResources
}) {
    const placeHolderRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        registerObserver(placeHolderRef.current, setVisible);
    }, []);

    if (visible) {
        return (
            <ResourceLinksContainer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
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
        );
    }
    return <PlaceHolder ref={placeHolderRef}> </PlaceHolder>;
}
