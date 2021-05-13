import React, { useState } from 'react';
import { getString } from '../../../lib/richText';
import { icons } from '../../../style/icons';
import OvalButton from '../../oval-button/OvalButton';
import {
  ActionButtonsWrapper,
  CloseModalButton,
  ContentWrapper,
  TakeActionModalWrapper,
  TakeActionModalButton,
  TakeActionButtonBox,
  TakeActionModalHeading,
  TakeActionModalDescription,
} from './TakeActionModal.styles';

export default function TakeActionModal({
  takeActionDescription,
  donateLink,
  learnLink,
  signLink,
  modalBackground,
}) {
  const [openHover, setOpenHover] = useState(false);
  const [closeHover, setCloseHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      {isModalOpen && (
        <TakeActionModalWrapper url={modalBackground.url}>
          <ContentWrapper>
            <TakeActionModalHeading>Take Action</TakeActionModalHeading>
            <TakeActionModalDescription>
              {getString(takeActionDescription)}
            </TakeActionModalDescription>
            <ActionButtonsWrapper>
              <OvalButton buttonText="SIGN" href={signLink.url} />
              <OvalButton buttonText="LEARN" href={learnLink.url} />
              <OvalButton buttonText="DONATE" href={donateLink.url} />
            </ActionButtonsWrapper>
          </ContentWrapper>
          <CloseModalButton
            onClick={() => setIsModalOpen(false)}
            onMouseEnter={() => setCloseHover(true)}
            onMouseLeave={() => setCloseHover(false)}
            src={
              closeHover
                ? icons.BLACK_ARROW_BUTTON_HOVER
                : icons.BLACK_ARROW_BUTTON
            }
          />
        </TakeActionModalWrapper>
      )}
      <TakeActionButtonBox
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={() => setOpenHover(true)}
        onMouseLeave={() => setOpenHover(false)}
        show={!isModalOpen}
      />
      <TakeActionModalButton
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={() => setOpenHover(true)}
        onMouseLeave={() => setOpenHover(false)}
        src={
          openHover ? icons.BLACK_ARROW_BUTTON_HOVER : icons.BLACK_ARROW_BUTTON
        }
        show={!isModalOpen}
      />
    </>
  );
}
