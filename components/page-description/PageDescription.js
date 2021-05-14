import { renderRichText } from '../../lib/richText';
import {
  PageDescriptionContainer,
  DescriptionContainer,
  Description,
  Img,
} from './PageDescription.styles';
import LongSparkArrow from '../long-spark-arrow/LongSparkArrow';
import { useSpring } from 'react-spring';

export default function PageDescription({
  description,
  arrowText,
  img,
  scrollTo,
}) {
  const descriptionAnimation = useSpring({
    to: { opacity: 1, transform: 'translateX(0)' },
    from: { opacity: 0, transform: 'translateX(-10em)' },
    config: { tension: 20, friction: 15 },
    delay: 1500,
  });

  const imgAnimation = useSpring({
    to: { opacity: 0.1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translateY(-15em)' },
    config: { tension: 20, friction: 15 },
  });

  return (
    <div>
      <PageDescriptionContainer>
        <LongSparkArrow arrowText={arrowText} scrollTo={scrollTo} pageDescription />
        <DescriptionContainer style={descriptionAnimation}>
          <Description>{renderRichText(description)}</Description>
        </DescriptionContainer>
      </PageDescriptionContainer>
      <Img src={img.url} alt={img.alt} style={imgAnimation} />
    </div>
  );
}
