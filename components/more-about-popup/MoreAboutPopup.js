import { PopupBox, Box, PopupTitle, TextContentWrapper, PopupImage, CloseIcon } from './MoreAboutPopup.styles.js';
import { P } from '../../style/typography';
import { getString, renderRichText } from '../../lib/richText';
import { icons } from '../../style/icons';

export default function MoreAboutPopup({ popupData, setIsPopupOpen }) {
    const {
        popupTitle,
        popupDescription,
        popupImage,
    } = popupData;

    console.log(popupData)
   
    return (
        <PopupBox>
            <Box>
                <PopupImage src={popupImage.url} alt={popupImage.alt} />
                <CloseIcon src={icons.CLOSE_ICON} alt="Close icon symbol used to close popup"
                    onClick={() => {
                        document.body.style.overflow = 'visible';
                        setIsPopupOpen(false);
                    }} />
                <TextContentWrapper>
                    <PopupTitle>{getString(popupTitle)}</PopupTitle>
                    <P>{renderRichText(popupDescription)}</P>
                </TextContentWrapper>
            </Box>
        </PopupBox>
    )
}