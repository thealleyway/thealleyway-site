import { H4, fontWeights } from '../../../../style/typography';
import styled from 'styled-components';
import { colors } from '../../../../style/colors';
import { min } from '../../../../lib/responsive';

const QuestionStyled = styled(H4)`
  font-size: 0.9em;
  font-weight: ${(props) =>
    props.isSelected ? fontWeights.medium : fontWeights.normal};
  color: ${colors.BROWN};
  padding-bottom: 0.3em;
  @media ${min.tablet} {
    color: ${(props) => (props.hover ? colors.SANDYYELLOW : colors.BROWN)};
    font-weight: ${(props) =>
      props.isSelected || props.hover
        ? fontWeights.medium
        : fontWeights.normal};
  }
`;

const ShortArrow = styled.img`
  width: 1.8em;
  transform: rotate(180deg);
  margin: 0;
  margin-left: 0.6em;
  @media ${min.tablet} {
    transform: rotate(90deg);
  }
`;

const QuestionAnswerContainer = styled.div`
  cursor: pointer;
  padding-bottom: 1em;
  @media ${min.tablet} {
    padding-bottom: 0;
  }
`;

const AnswerStyled = styled.div`
  @media ${min.tablet} {
    display: none;
  }
`;

export { QuestionStyled, ShortArrow, QuestionAnswerContainer, AnswerStyled };
