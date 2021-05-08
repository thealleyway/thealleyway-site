import {
  PopupBox,
  Box,
  PopupTitle,
  TextContentWrapper,
  PopupImage,
  CloseIcon,
} from './MoreAboutPopup.styles.js';
import { P } from '../../style/typography';
import { getString, renderRichText } from '../../lib/richText';
import { icons } from '../../style/icons';

export default function MoreAboutPopup({ popupData, setIsPopupOpen }) {
  const { popupTitles, popupDescriptions, popupImage } = popupData;

  return (
    <PopupBox>
      <Box>
        <PopupImage src={popupImage.url} alt={popupImage.alt} />
        <CloseIcon
          src={icons.CLOSE_ICON}
          alt="Close icon symbol used to close popup"
          onClick={() => {
            document.body.style.overflow = 'visible';
            setIsPopupOpen(false);
          }}
          whileHover={{ scale: 1.05 }}
        />
        <TextContentWrapper>
          {popupTitles.map((title, index) => {
            return (
              <>
                <PopupTitle>{getString(title).toUpperCase()}</PopupTitle>
                <P>{renderRichText(popupDescriptions[index])}</P>
              </>
            );
          })}
        </TextContentWrapper>
      </Box>
    </PopupBox>
  );
}
