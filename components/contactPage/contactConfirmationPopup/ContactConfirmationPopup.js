import { getString } from '../../../lib/richText';
import {
  PopupBox,
  Box,
  TextContent,
  ImgBackground,
  Img,
  X,
  H2Styled,
  PStyled,
} from './ContactConfirmationPopup.styles';
import { icons } from '../../../style/icons';
export default function ContactConfirmationPopup({
  contactConfirmationData,
  togglePopup,
}) {
  const {
    contact_confirmation_title_regular_1: contactConfirmationTitleRegular1,
    contact_confirmation_title_italic_2: contactConfirmationTitleItalic2,
    contact_confirmation_title_regular_3: contactConfirmationTitleRegular3,
    contact_confirmation_description: description,
    contact_confirmation_image: image,
  } = contactConfirmationData;

  return (
    <>
      <PopupBox>
        <Box>
          <TextContent>
            <H2Styled>
              {getString(contactConfirmationTitleRegular1) + ' '}
              <i>{getString(contactConfirmationTitleItalic2) + ' '}</i>
              {getString(contactConfirmationTitleRegular3)}
            </H2Styled>
            <PStyled>{getString(description)}</PStyled>
          </TextContent>
          <ImgBackground src={image.url} alt={image.alt} />
          <Img src={image.url} alt={image.alt} />
          <X
            src={icons.X}
            alt="X symbol used to close popup"
            onClick={togglePopup}
          />
        </Box>
      </PopupBox>
    </>
  );
}
