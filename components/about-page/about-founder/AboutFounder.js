import React, { useState } from 'react';
import { getString, renderRichText } from '../../../lib/richText';
import LongSparkArrow from '../../long-spark-arrow/LongSparkArrow';
import { H4, P, InputInfoText } from '../../../style/typography';
import { breakpointsObj } from '../../../lib/responsive';
import { useMatchMedia } from '../../../lib/hooks';
import MoreAboutPopup from '../../more-about-popup/MoreAboutPopup';
import { Overlay } from '../../base-components/BaseComponents';
import OvalButton from '../../oval-button/OvalButton';
import {
  ScrollToMeetFounder,
  MeetFounderContainer,
  MeetFounderWrapper,
  TextWrapper,
  H2Wrapper,
  ResourceButtonsWrapper,
  MoreResourcesTitleWrapper,
  AboutImageLeftDesktop,
  AboutImageLeftTablet,
  AboutImageQuoteWrapper,
  AboutImageRight,
  AboutImageRightOpacity,
  TopQuoteWrapper,
  SparkArrowWrapper,
} from './AboutFounder.style';

export default function AboutFounder({ aboutFounderData, id, scrollToId }) {
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
    <>
      <ScrollToMeetFounder id={id} />
      <MeetFounderContainer>
        <MeetFounderWrapper>
          {!isTabletOrMobile && (
            <AboutImageLeftDesktop
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
                <OvalButton
                  key={r.id}
                  buttonText={getString(r.resourceTitle).toUpperCase()}
                  href={r.resourceLink.url}
                  onClick={() => window.open(r.resourceLink.url, '_blank')}
                />
              ))}
            </ResourceButtonsWrapper>
            <MoreResourcesTitleWrapper onClick={togglePopup}>
              <InputInfoText>{getString(moreResourcesTitle)}</InputInfoText>
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
            <TopQuoteWrapper>
              {renderRichText(camarynImageQuote)}
            </TopQuoteWrapper>
          </AboutImageQuoteWrapper>
        </MeetFounderWrapper>
        {isTabletOrMobile && !isMobile && (
          <AboutImageLeftTablet
            src={camarynImageLeft.url}
            alt={camarynImageLeft.alt}
          />
        )}
        {!isTabletOrMobile && (
          <SparkArrowWrapper>
            <LongSparkArrow
              arrowText={sparkArrowMissionText}
              scrollTo={scrollToId}
            />
          </SparkArrowWrapper>
        )}
        {isOpen && (
          <MoreAboutPopup popupData={popUpData} setIsPopupOpen={togglePopup} />
        )}
        <Overlay showOverlay={isOpen} />
      </MeetFounderContainer>
    </>
  );
}
