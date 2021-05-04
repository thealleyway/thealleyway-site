import React, { useState } from 'react';
import { getString, renderRichText } from '../../../lib/richText';
import MainResource from '../main-resource/MainResource';
import LongSparkArrow from '../../long-spark-arrow/LongSparkArrow';
import { H4, P } from '../../../style/typography';
import { breakpointsObj } from '../../../lib/responsive';
import { useMatchMedia } from '../../../lib/hooks';
import MoreAboutPopup from '../../more-about-popup/MoreAboutPopup';
import { Overlay } from '../../base-components/BaseComponents';
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
    more_resources_image: moreResourcesImage,
    camaryn_image_right: camarynImageRight,
    camaryn_image_left: camarynImageLeft,
    top_quote: camarynImageQuote,
    spark_arrow_mission_text: sparkArrowMissionText,
  } = aboutFounderData;

  const isTabletOrMobile = useMatchMedia(
    `(max-width: ${breakpointsObj.tabletLg}px)`,
  );

  const isMobile = useMatchMedia(`(max-width: ${breakpointsObj.tabletSm}px)`);

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  const getPopupTitles = resourceData.map((r) => r.resourceTitle);

  const getPopupDescriptions = resourceData.map((r) => r.resourceDescription);

  const popUpData = {
    popupImage: moreResourcesImage,
    popupTitles: getPopupTitles,
    popupDescriptions: getPopupDescriptions,
  };

  return (
    <MeetFounderContainer id="about-founder">
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
          <MoreResourcesTitleWrapper onClick={togglePopup}>
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
      {isOpen && (
        <MoreAboutPopup popupData={popUpData} setIsPopupOpen={togglePopup} />
      )}
      <Overlay showOverlay={isOpen} />
    </MeetFounderContainer>
  );
}
