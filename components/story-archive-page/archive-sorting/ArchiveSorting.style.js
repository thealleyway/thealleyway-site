import styled from 'styled-components';
import { P, fontWeights } from '../../../style/typography';
import { colors } from '../../../style/colors';

const SortLabelWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const SortLabel = styled(P)`
  color: ${colors.BROWN};
  font-weight: ${(props) =>
    props.enabled ? fontWeights.bold : fontWeights.normal};
  letter-spacing: 0.13em;
  margin: 0;

  ${SortLabelWrapper}:hover & {
    font-weight: ${fontWeights.bold};
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
