import {
  BottomImageContainer,
  BottomImage,
  ImageBoxLinkContainer,
  BoxLinkContainer,
} from './ImageBoxLink.styles';
import BoxLink from '../box-link/BoxLink';

export default function ImageBoxLink({ boxLinkData, height }) {
  const { img, data } = boxLinkData;
  return (
    <ImageBoxLinkContainer height={height}>
      <BottomImageContainer>
        <BottomImage src={img.url} alt={img.alt} height={height} />
      </BottomImageContainer>
      <BoxLinkContainer>
        <BoxLink boxLinkData={data} />
      </BoxLinkContainer>
    </ImageBoxLinkContainer>
  );
}
