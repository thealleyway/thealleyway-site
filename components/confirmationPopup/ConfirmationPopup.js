import { getString } from '../../lib/richText';
import {
  PopupBox,
  Box,
  TextContent,
  ImgBackground,
  Img,
  CloseIcon,
  H2Styled,
  PStyled,
} from './ConfirmationPopup.styles';
import { icons } from '../../style/icons';

export default function ConfirmationPopup({ confirmationData, togglePopup }) {
  const {
    confirmationTitleRegular1,
    confirmationTitleItalic2,
    confirmationTitleRegular3,
    confirmationDescription,
    confirmationImage,
  } = confirmationData;

  return (
    <>
      <PopupBox>
        <Box>
          <TextContent>
            <H2Styled>
              {getString(confirmationTitleRegular1) + ' '}
              <i>{getString(confirmationTitleItalic2) + ' '}</i>
              {getString(confirmationTitleRegular3)}
            </H2Styled>
            <PStyled>{getString(confirmationDescription)}</PStyled>
          </TextContent>
          <ImgBackground
            src={confirmationImage.url}
            alt={confirmationImage.alt}
          />
          <Img src={confirmationImage.url} alt={confirmationImage.alt} />
          <CloseIcon
            src={icons.CLOSE_ICON}
            alt="Close icon symbol used to close popup"
            onClick={togglePopup}
          />
        </Box>
      </PopupBox>
    </>
  );
}
