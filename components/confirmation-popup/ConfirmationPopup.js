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

export default function ConfirmationPopup({
  confirmationData,
  togglePopup,
  name,
  page,
}) {
  const {
    confirmationTitleRegular,
    confirmationTitleItalic,
    confirmationDescription,
    confirmationImage,
  } = confirmationData;

  let firstName = '';
  if (name != undefined) {
    firstName = name.trim().split(' ')[0];
  }
  if (firstName.length > 12) {
    firstName = firstName.slice(0, 12) + '...';
  }

  return (
    <>
      <PopupBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', duration: 1 }}
        page={page}
      >
        <Box page={page}>
          <TextContent page={page}>
            <H2Styled page={page}>
              <i>{getString(confirmationTitleItalic) + ' '}</i>
              {name != undefined && firstName + ', '}
              {getString(confirmationTitleRegular)}
            </H2Styled>
            <PStyled page={page}>{getString(confirmationDescription)}</PStyled>
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
              togglePopup(false);
            }}
            whileHover={{ scale: 1.05 }}
          />
        </Box>
      </PopupBox>
    </>
  );
}
