import {
  BottomImageContainer,
  BottomImage,
  ImageBoxLinkContainer,
  BoxLinkContainer,
} from './ImageBoxLink.styles';
import BoxLink from '../box-link/BoxLink';

export default function ImageBoxLink({ img, boxLinkData }) {
  return (
    <ImageBoxLinkContainer>
      <BottomImageContainer>
        <BottomImage src={img.url} alt={img.alt} />
      </BottomImageContainer>
      <BoxLinkContainer>
        <BoxLink boxLinkData={boxLinkData} />
      </BoxLinkContainer>
    </ImageBoxLinkContainer>
  );
}
