import { getString, renderRichText } from '../../../lib/richText';
import { breakpointsObj } from '../../../lib/responsive';
import { useMatchMedia } from '../../../lib/hooks';
import { P } from '../../../style/typography';
import LongSparkArrow from '../../long-spark-arrow/LongSparkArrow';
import ImageBoxLink from '../../image-box-link/ImageBoxLink';
import { H2Wrapper } from '../about-founder/AboutFounder.style';
import {
  ScrollToMission,
  OurMissionContainer,
  OurMissionWrapper,
  OurMissionImgLeft,
  OurMissionImgRight,
  OurMissionTextContainer,
  BoxLinkWrapper,
  SparkArrowWrapper,
} from './AboutMission.style';

export default function AboutMission({ missionData, id, scrollToId }) {
  const {
    our_mission_title: ourMissionTitle,
    our_mission_description: ourMissionDescription,
    spark_arrow_values_text: sparkArrowValuesText,
    our_mission_image_left: ourMissionImage,
    boxLinkData,
  } = missionData;

  const isTabletOrMobile = useMatchMedia(
    `(max-width: ${breakpointsObj.tabletLg}px)`,
  );
  return (
    <>
      <ScrollToMission id={id} />
      <OurMissionContainer>
        <OurMissionWrapper>
          <OurMissionImgLeft
            src={ourMissionImage.url}
            alt={ourMissionImage.alt}
          />
          <OurMissionTextContainer>
            <H2Wrapper>{getString(ourMissionTitle)}</H2Wrapper>
            <P>{renderRichText(ourMissionDescription)}</P>
          </OurMissionTextContainer>
          {!isTabletOrMobile ? (
            <BoxLinkWrapper>
              <ImageBoxLink
                boxLinkData={boxLinkData}
                height="clamp(41em, 56vw, 50em);"
              />
            </BoxLinkWrapper>
          ) : (
            <OurMissionImgRight
              src={boxLinkData.img.url}
              alt={boxLinkData.img.alt}
            />
          )}
        </OurMissionWrapper>
        {!isTabletOrMobile && (
          <SparkArrowWrapper>
            <LongSparkArrow
              arrowText={sparkArrowValuesText}
              scrollTo={scrollToId}
            />
          </SparkArrowWrapper>
        )}
      </OurMissionContainer>
    </>
  );
}
