import styled from 'styled-components';
import { colors } from '../../style/colors';
import { min, max } from '../../lib/responsive';
import { motion } from 'framer-motion';
import { P } from '../../style/typography';
import { HoverAnimationButton } from '../animation-base-components/AnimationBaseComponents';

export const Overlay = styled.div`
  display: ${(props) => (props.showOverlay ? 'block' : 'none')};
  position: fixed;
  background-color: ${colors.CREME};
  opacity: 0.7;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
`;

export const RedStar = styled.img`
  width: 2%;
  margin-left: 0.5em;
  @media ${min.desktopLg} {
    width: 0.7em;
  }
`;

export const PlaceHolder = styled.div`
  height: 500em;
`;

export const SubmitButtonContainer = styled(motion.button)`
  width: ${(props) => (props.long ? `250px` : `150px`)};
  height: 48px;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  overflow: hidden;
  outline: none;
  align-self: flex-end;
`;

export const SubmitButton = styled(P).attrs({
  as: HoverAnimationButton,
})`
  color: ${colors.WHITE};
  background-color: ${colors.OLIVE};
  border: none;
  width: ${(props) => (props.long ? `250px` : `150px`)};
  height: 48px;
  font-weight: normal;
  letter-spacing: 0.13em;
  cursor: pointer;
  @media ${max.tabletSm} {
    align-self: center;
    width: ${(props) => (props.long ? `85%` : `65%`)};
  }
`;
