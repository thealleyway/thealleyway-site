import { getString, renderRichText } from '../../../lib/richText';
import MainResource from '../main-resource/MainResource';
import LongSparkArrow from '../../long-spark-arrow/LongSparkArrow';
import { H4, P } from '../../../style/typography';
import { breakpointsObj } from '../../../lib/responsive';
import { useMatchMedia } from '../../../lib/hooks';
import {
  MeetFounderContainer,
  MeetFounderWrapper,
  TextWrapper,
  H2Wrapper,
  ResourceButtonsWrapper,
  MoreResourcesTitle,
  MoreResourcesTitleWrapper,
  AboutImageLeft,
  AboutImageQuoteWrapper,
  AboutImageRight,
  AboutImageRightOpacity,
  TopQuoteWrapper,
  SparkArrowWrapper,
} from './AboutFounder.style';

export default function AboutFounder({ aboutFounderData }) {
  const {
    camaryn_title: camarynTitle,
    camaryn_text: camarynText,
    resource_data: resourceData,
    camaryns_resources_title: resourcesTitle,
    camaryns_resources_description: resourcesDescription,
    more_resources_title: moreResourcesTitle,
    camaryn_image_right: camarynImageRight,
    camaryn_image_left: camarynImageLeft,
    top_quote: camarynImageQuote,
    spark_arrow_mission_text: sparkArrowMissionText,
  } = aboutFounderData;

  const isTabletOrMobile = useMatchMedia(
    `(max-width: ${breakpointsObj.tabletLg}px)`,
  );

  const isMobile = useMatchMedia(`(max-width: ${breakpointsObj.tabletSm}px)`);

  return (
    <MeetFounderContainer id="founder">
      <MeetFounderWrapper>
        {!isTabletOrMobile && (
          <AboutImageLeft
            src={camarynImageLeft.url}
            alt={camarynImageLeft.alt}
          />
        )}
        <TextWrapper>
          <H2Wrapper>{getString(camarynTitle)}</H2Wrapper>
          <P>{renderRichText(camarynText)}</P>
          <br />
          <H4>{getString(resourcesTitle).toUpperCase()}</H4>
          <P>{renderRichText(resourcesDescription)}</P>
          <br />
          <ResourceButtonsWrapper>
            {resourceData.map((r) => (
              <MainResource key={r.id} mainResourceData={r} />
            ))}
          </ResourceButtonsWrapper>
          <MoreResourcesTitleWrapper>
            <MoreResourcesTitle>
              {getString(moreResourcesTitle)}
            </MoreResourcesTitle>
          </MoreResourcesTitleWrapper>
        </TextWrapper>
        <AboutImageQuoteWrapper>
          <AboutImageRight
            src={camarynImageRight.url}
            alt={camarynImageRight.alt}
          />
          <AboutImageRightOpacity
            src={camarynImageRight.url}
            alt={camarynImageRight.alt}
          />
          <TopQuoteWrapper>{renderRichText(camarynImageQuote)}</TopQuoteWrapper>
        </AboutImageQuoteWrapper>
      </MeetFounderWrapper>
      {isTabletOrMobile && !isMobile && (
        <AboutImageLeft src={camarynImageLeft.url} alt={camarynImageLeft.alt} />
      )}
      <SparkArrowWrapper>
        <LongSparkArrow arrowText={sparkArrowMissionText} />
      </SparkArrowWrapper>
    </MeetFounderContainer>
  );
}
