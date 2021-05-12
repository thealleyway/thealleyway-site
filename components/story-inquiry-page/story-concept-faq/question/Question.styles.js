import { H4, fontWeights } from '../../../../style/typography';
import styled from 'styled-components';
import { colors } from '../../../../style/colors';
import { min } from '../../../../lib/responsive';
import { HoverAnimationButton } from '../../../animation-base-components/AnimationBaseComponents';

const QuestionStyled = styled(H4).attrs({
  as: HoverAnimationButton,
})`
  font-size: 0.9em;
  border: none;
  cursor: pointer;
  background: none;
  padding: 0;
  margin: 0.5em 0;
  font-weight: ${(props) =>
    props.selected ? fontWeights.medium : fontWeights.normal};
  color: ${colors.BROWN};
  padding-bottom: 0.3em;
  text-align: left;
`;

const ShortArrow = styled.img`
  display: none;
  @media ${min.tablet} {
    display: inline;
    transform: rotate(90deg);
    width: 1.8em;
    margin: 0;
    margin-left: 0.6em;
  }
`;

const QuestionAnswerContainer = styled.div`
  cursor: pointer;
  padding-bottom: 1em;
  position: relative;
  z-index: 11;
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
