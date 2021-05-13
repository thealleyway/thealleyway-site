import { P } from '../../../../style/typography';
import { getString } from '../../../../lib/richText';
import {
  QuestionStyled,
  ShortArrow,
  QuestionAnswerContainer,
  AnswerStyled,
} from './Question.styles';
import React from 'react';
import { icons } from '../../../../style/icons';
import { colors } from '../../../../style/colors';
import { breakpointsObj } from '../../../../lib/responsive';
import { useMatchMedia } from '../../../../lib/hooks';

export default function Question({
  questionAnswerData,
  setCurrIndex,
  currIndex,
  index,
}) {
  const { question, answer } = questionAnswerData;
  const isSelected = index === currIndex;
  const isMobile = useMatchMedia(`(max-width: ${breakpointsObj.tabletSm}px)`);

  return (
    <QuestionAnswerContainer>
      <QuestionStyled
        onClick={() => {
          if (isSelected && isMobile) {
            setCurrIndex();
          } else {
            setCurrIndex(index);
          }
        }}
        selected={isSelected}
        color={colors.BROWN}
      >
        {getString(question)}{' '}
        {isSelected && (
          <ShortArrow src={icons.FILLED_SHORT_ARROW} alt="filled short arrow" />
        )}
      </QuestionStyled>
      <AnswerStyled>{isSelected && <P>{getString(answer)}</P>}</AnswerStyled>
    </QuestionAnswerContainer>
  );
}
