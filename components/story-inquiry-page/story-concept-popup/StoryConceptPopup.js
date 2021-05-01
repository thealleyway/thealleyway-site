import { PopupBox, Box, PopupTitle, TextContentWrapper, PopupImage, CloseIcon } from './StoryConceptPopup.styles';
import { P } from '../../../style/typography';
import { getString, renderRichText } from '../../../lib/richText';
import { icons } from '../../../style/icons';
export default function StoryConceptPopup({ storyConceptPopupData, setIsStoryConceptPopupOpen }) {
    const {
        story_concept_popup_title: storyConceptPopupTitle,
        story_concept_popup_description: storyConceptPopupDescription,
        story_concept_popup_image: storyConceptPopupImage,
    } = storyConceptPopupData;

    return (
        <PopupBox>
            <Box>
                <PopupImage src={storyConceptPopupImage.url} alt={storyConceptPopupImage.alt} />
                <CloseIcon src={icons.CLOSE_ICON} alt="Close icon symbol used to close popup"
                    onClick={() => {
                        document.body.style.overflow = 'visible';
                        setIsStoryConceptPopupOpen(false);
                    }} />
                <TextContentWrapper>
                    <PopupTitle>{getString(storyConceptPopupTitle)}</PopupTitle>
                    <P>{renderRichText(storyConceptPopupDescription)}</P>
                </TextContentWrapper>
            </Box>
        </PopupBox>
    )
}