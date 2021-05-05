import { getString } from '../../../lib/richText';
import { breakpointsObj } from '../../../lib/responsive';
import { useMatchMedia } from '../../../lib/hooks';
import { H2Wrapper } from '../about-founder/AboutFounder.style';
import LongSparkArrow from '../../long-spark-arrow/LongSparkArrow';
import Value from './value/Value';
import {
  OurValuesContainer,
  ContentWrapper,
  ValueImageRight,
  AboutValueTitleWrapper,
  ValuesContainer,
  SparkArrowWrapper,
} from './AboutValue.style';

export default function AboutValue({ aboutValueData, id, scrollToId }) {
  const {
    values: valuesData,
    values_title: valuesTitle,
    values_image: valuesImage,
    spark_arrow_name_text: sparkArrowNameText,
  } = aboutValueData;

  const isTabletLgOrMobile = useMatchMedia(
    `(max-width: ${breakpointsObj.tabletLg}px)`,
  );

  return (
    <OurValuesContainer id={id}>
      <ContentWrapper>
        <AboutValueTitleWrapper>
          <H2Wrapper>{getString(valuesTitle)}</H2Wrapper>
        </AboutValueTitleWrapper>
        <ValueImageRight src={valuesImage.url} alt={valuesImage.alt} />
      </ContentWrapper>
      {!isTabletLgOrMobile && (
        <SparkArrowWrapper>
          <LongSparkArrow
            arrowText={sparkArrowNameText}
            scrollTo={scrollToId}
          />
        </SparkArrowWrapper>
      )}
      <ValuesContainer>
        {valuesData.map((v, index) => {
          if (index < 3) {
            return <Value key={v.id} valueData={v.data} offset={index} />;
          }
        })}
      </ValuesContainer>
    </OurValuesContainer>
  );
}
