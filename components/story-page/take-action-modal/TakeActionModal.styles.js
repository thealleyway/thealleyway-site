import styled from 'styled-components';
import { H2, P } from '../../../style/typography';
import { colors } from '../../../style/colors';
import { motion } from 'framer-motion';

export const TakeActionModalWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: calc(50vh - 35vh);
  left: 0;
  height: 70vh;
  width: 50vw;
  z-index: 15;
  background-color: ${colors.CREME};
  border: 2px solid ${colors.BLACK};
  border-left: 0;

  &:before {
    background: ${(props) => `url('${props.url}') no-repeat`};
    background-size: 50vw;
    opacity: 0.15;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    content: '';
  }
`;

export const ContentWrapper = styled(motion.div)`
  width: 60%;
  padding-left: 2em;
`;

export const TakeActionModalHeading = styled(H2)`
  margin-top: 0;
`;

export const TakeActionModalDescription = styled(P).attrs({
  as: 'div',
})`
  margin-bottom: 1em;
`;

export const ActionButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const TakeActionModalButton = styled.img`
  display: ${(props) => (props.show ? 'block' : 'none')};
  cursor: pointer;
  position: fixed;
  height: 3.5em;
  width: 3.5em;
  top: calc(50% - 1.75em);
  left: 1em;
`;

export const TakeActionButtonBox = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  cursor: pointer;
  position: fixed;
  border: 2px ${colors.BLACK} solid;
  border-left: none;
  background-color: ${colors.CREME};
  height: 8em;
  width: 2.75em;
  top: calc(50% - 4em);
  left: 0;
`;

export const CloseModalButton = styled.img`
  transform: rotate(180deg);
  cursor: pointer;
  position: fixed;
  height: 3.5em;
  width: 3.5em;
  top: calc(50% - 1.75em);
  left: calc(50vw - 1.75em);
  z-index: 16;
`;
