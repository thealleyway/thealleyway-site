import styled from 'styled-components';
import { P, fontWeights } from '../../../style/typography';
import { colors } from '../../../style/colors';
import { motion } from 'framer-motion';
import { HoverAnimationButton } from '../../animation-base-components/AnimationBaseComponents';

const SortLabelWrapper = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const SortLabel = styled(P).attrs({
  as: HoverAnimationButton,
})`
  color: ${colors.STONEPATH};
  letter-spacing: 0.13em;
  margin: 0;
  border: none;
  padding: 0;
  background: none;
  font-weight: ${(props) =>
    props.selected ? fontWeights.bold : fontWeights.normal};

  ${SortLabelWrapper}:hover & {
    cursor: pointer;
  }
`;

const SortUnderline = styled.img`
  visibility: ${(props) => (props.enabled ? 'visible' : 'hidden')};
  transform: ${(props) => (props.alpha ? 'scale(4)' : 'scale(1.2)')};
  margin-top: ${(props) => (props.alpha ? '0' : '-5px')};

  ${SortLabelWrapper}:hover & {
    visibility: visible;
  }
`;

export { SortLabelWrapper, SortLabel, SortUnderline };
