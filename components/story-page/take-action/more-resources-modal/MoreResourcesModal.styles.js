import styled from 'styled-components';
import { motion } from 'framer-motion';
import { max } from '../../../../lib/responsive';
import { colors } from '../../../../style/colors';
import { P, H4 } from '../../../../style/typography';

export const MoreResourcesModalWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 3em 4em;
  width: 24em;
  height: 26em;
  border: 2px ${colors.NIGHTSKY} solid;
  background-color: ${colors.CANVAS};
  position: fixed;
  top: calc(50% - 13em);
  right: 12em;
  z-index: 15;

  &:before {
    background: ${(props) => `url('${props.url}') no-repeat`};
    background-size: 24em;
    opacity: 0.15;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    content: '';
  }

  @media ${max.tabletLg} {
    right: calc(50% - 12em);
  }

  @media ${max.tabletSm} {
    width: 90%;
    left: 5%;
    padding: 3em;
  }
`;

export const MoreResourcesTitle = styled(H4)`
  color: ${colors.ROSEMAUVE};
  text-transform: uppercase;
`;

export const MoreResourcesLink = styled(P).attrs({
  as: 'a',
})`
  &:hover {
    text-decoration: underline;
  }
`;

export const CloseIcon = styled.img`
  cursor: pointer;
  width: 1.5em;
  position: absolute;
  top: 1em;
  right: 1em;
`;
