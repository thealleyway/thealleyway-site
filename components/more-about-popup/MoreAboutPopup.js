import { PopupBox, Box, PopupTitle, TextContentWrapper, PopupImage, CloseIcon } from './MoreAboutPopup.styles';
import { P } from '../../style/typography';
import { getString, renderRichText } from '../../lib/richText';
import { icons } from '../../style/icons';
export default function MoreAboutPopup({ popupData, setIsPopupOpen }) {
    const {
        popup_title: popupTitle,
        popup_description: popupDescription,
        popup_image: popupImage,
    } = popupData;
   
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