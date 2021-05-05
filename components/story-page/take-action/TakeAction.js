import React, { useState } from 'react';
import { useMatchMedia } from '../../../lib/hooks';
import { breakpointsObj } from '../../../lib/responsive';
import { getString } from '../../../lib/richText';
import { icons } from '../../../style/icons';
import { InputInfoText } from '../../../style/typography';
import OvalButton from '../../oval-button/OvalButton';
import BackToStartButton from '../../back-to-start-button/BackToStartButton';
import MoreResourcesModal from './more-resources-modal/MoreResourcesModal';
import {
  ActionButtonsWrapper,
  BackToStartButtonContainer,
  TitleAndButtonWrapper,
  DescriptionText,
  ResourceWrapper,
  TakeActionHeadingDesktop,
  TabletMobileWrapper,
  TabletMobileTake,
  TabletMobileAction,
  TakeActionWrapper,
  UnderlineImage,
} from './TakeAction.styles';

export default function TakeAction({
  takeActionDescription,
  donateLink,
  learnLink,
  signLink,
  moreResources,
  moreResourcesBackground,
}) {
  const isTabletOrMobile = useMatchMedia(
    `(max-width: ${breakpointsObj.tabletLg}px)`,
  );

  const showMoreResources = moreResources.length > 0;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const takeActionContent = (
    <>
      <DescriptionText>{getString(takeActionDescription)}</DescriptionText>
      <ResourceWrapper>
        <ActionButtonsWrapper>
          <OvalButton buttonText="SIGN" href={signLink.url} />
          <OvalButton buttonText="LEARN" href={learnLink.url} />
          <OvalButton buttonText="DONATE" href={donateLink.url} />
        </ActionButtonsWrapper>
        {showMoreResources && (
          <InputInfoText
            onClick={() => {
              document.body.style.overflow = 'hidden';
              setIsModalOpen(true);
            }}
          >
            more on these resources
          </InputInfoText>
        )}
      </ResourceWrapper>
    </>
  );

  return (
    <>
      {isTabletOrMobile ? (
        <TabletMobileWrapper>
          <TabletMobileTake>Take</TabletMobileTake>
          <TabletMobileAction>
            <i>Action</i>
            <img src={icons.SQUIGGLE_UNDERLINE} alt="underline squiggle" />
          </TabletMobileAction>
          {takeActionContent}
        </TabletMobileWrapper>
      ) : (
        <TakeActionWrapper>
          <TitleAndButtonWrapper>
            <TakeActionHeadingDesktop>
              Take <i>Action</i>
              <UnderlineImage
                src={icons.SQUIGGLE_UNDERLINE}
                alt="underline squiggle"
              />
            </TakeActionHeadingDesktop>
            <BackToStartButtonContainer>
              <BackToStartButton showHorizontal />
            </BackToStartButtonContainer>
          </TitleAndButtonWrapper>
          {takeActionContent}
        </TakeActionWrapper>
      )}
      {showMoreResources && isModalOpen && (
        <MoreResourcesModal
          onClose={() => {
            document.body.style.overflow = 'visible';
            setIsModalOpen(false);
          }}
          moreResources={moreResources}
          moreResourcesBackground={moreResourcesBackground}
        />
      )}
    </>
  );
}
