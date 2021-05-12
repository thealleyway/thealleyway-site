import styled from 'styled-components';
import { colors } from '../../style/colors';
import { min, max } from '../../lib/responsive';
import { motion } from 'framer-motion';
import { P } from '../../style/typography';
import { HoverAnimationButton } from '../animation-base-components/AnimationBaseComponents';

export const Overlay = styled.div`
  display: ${(props) => (props.showOverlay ? 'block' : 'none')};
  position: fixed;
  background-color: ${colors.CANVAS};
  opacity: 0.7;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
`;

export const RedStar = styled.img`
  width: ${(props) => (props.biggerStar ? '3%' : '2%')};
  margin-left: ${(props) => (props.box ? '0.45em' : '0.5em')};
  margin-top: ${(props) => (props.box ? '0.44em' : 0)};
  @media ${min.desktopLg} {
    width: 0.7em;
  }
`;

export const PlaceHolder = styled.div`
  height: 500em;
`;

export const SubmitButtonContainer = styled(motion.button)`
  width: ${(props) => (props.long ? `250px` : `170px`)};
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
  ariaLabel: 'Submission button',
})`
  color: ${colors.FRESHSNOW};
  background-color: ${colors.DEWYGRASS};
  border: none;
  width: ${(props) => (props.long ? `230px` : `150px`)};
  height: 48px;
  font-weight: normal;
  letter-spacing: 0.13em;
  cursor: pointer;
  @media ${max.tabletSm} {
    align-self: center;
    width: 100%;
    font-size: 1.3em;
  }
`;
