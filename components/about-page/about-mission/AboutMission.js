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
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';
import { PlaceHolder } from '../../base-components/BaseComponents';

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

  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  if (visible) {
    return (
      <>
        <ScrollToMission id={id} />
        <OurMissionContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 4 }}
        >
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
  return <PlaceHolder ref={placeHolderRef} />;
}
