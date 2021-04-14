import { getString } from '../../lib/richText';
import {
  PageDescriptionContainer,
  DescriptionContainer,
  Description,
  Img,
} from './PageDescription.styles';
import LongSparkArrow from '../longSparkArrow/LongSparkArrow';

export default function PageDescription({ description, arrowText, img }) {
  return (
    <div>
      <PageDescriptionContainer>
        <LongSparkArrow arrowText={arrowText} />
        <DescriptionContainer>
          <Description>{getString(description)}</Description>
        </DescriptionContainer>
      </PageDescriptionContainer>
      <Img src={img} />
    </div>
  );
}
