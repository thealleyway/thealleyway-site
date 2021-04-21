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
  Arch,
  ArchImgContainer,
} from './ConfirmationPopup.styles';
import { icons } from '../../style/icons';

export default function ConfirmationPopup({ confirmationData, togglePopup }) {
  const {
    confirmationTitleRegular,
    confirmationTitleItalic,
    confirmationDescription,
    confirmationImage,
  } = confirmationData;

  return (
    <>
      <PopupBox>
        <Box>
          <TextContent>
            <H2Styled>
              <i>{getString(confirmationTitleItalic) + ' '}</i>
              {getString(confirmationTitleRegular)}
            </H2Styled>
            <PStyled>{getString(confirmationDescription)}</PStyled>
          </TextContent>
          <ImgBackground
            src={confirmationImage.url}
            alt={confirmationImage.alt}
          />
          <ArchImgContainer>
            <Img src={confirmationImage.url} alt={confirmationImage.alt} />
            <Arch src={icons.SINGLE_ARCHWAY} alt="White single archway" />
          </ArchImgContainer>
          <CloseIcon
            src={icons.CLOSE_ICON}
            alt="Close icon symbol used to close popup"
            onClick={() => {
              document.body.style.overflow = 'visible';
              togglePopup();
            }}
          />
        </Box>
      </PopupBox>
    </>
  );
}
