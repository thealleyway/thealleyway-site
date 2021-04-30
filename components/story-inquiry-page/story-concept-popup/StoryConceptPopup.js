import { PopupBox, Box, PopupTitle, TextContentWrapper } from './StoryConceptPopup.styles';
import { P } from '../../../style/typography';
import { getString, renderRichText } from '../../../lib/richText';
export default function StoryConceptPopup({ storyConceptPopupData }) {
    const {
        story_concept_popup_title: storyConceptPopupTitle,
        story_concept_popup_description: storyConceptPopupDescription,
        story_concept_popup_image: storyConceptPopupImage,
    } = storyConceptPopupData;

    return (
        <PopupBox>
            <Box>
                <TextContentWrapper>
                    <PopupTitle>{getString(storyConceptPopupTitle)}</PopupTitle>
                    <P>{renderRichText(storyConceptPopupDescription)}</P>
                </TextContentWrapper>
            </Box>
        </PopupBox>
    )
}