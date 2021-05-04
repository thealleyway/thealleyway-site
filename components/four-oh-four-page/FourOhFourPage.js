import { getString } from '../../lib/richText';
import {
  ImgBackground,
  ContentWrapper,
  TextWrapper,
  ErrorTitleText,
  ErrorText,
  ImgWrapper,
  FrontImg,
} from './FourOhFourPage.style';
import Navigation from '../navigation/Navigation';

export default function FourOhFourPage({ navigationData, errorPageData }) {
  const {
    error_page_title_regular: errorPageTitleRegular,
    error_page_title_italic: errorPageTitleItalic,
    error_text: errorText,
    error_page_background_image: backgroundImage,
    error_page_small_image: frontImage,
  } = errorPageData;

  return (
    <>
      <Navigation navigationData={navigationData} />
      <ImgBackground src={backgroundImage.url} alt={backgroundImage.alt} />
      <ContentWrapper>
        <TextWrapper>
          <ErrorTitleText>
            {getString(errorPageTitleRegular) + ' '}
            <i>{getString(errorPageTitleItalic)}</i>
          </ErrorTitleText>
          <ErrorText>{getString(errorText)}</ErrorText>
        </TextWrapper>
        <ImgWrapper>
          <FrontImg src={frontImage.url} alt={frontImage.alt} />
        </ImgWrapper>
      </ContentWrapper>
    </>
  );
}
