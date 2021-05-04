import { H4, P } from '../../../../style/typography';
import { getString } from '../../../../lib/richText';
import { QuestionStyled, ShortArrow, QuestionAnswerContainer, AnswerStyled } from './Question.styles';
import React, { useState } from 'react';
import { icons } from '../../../../style/icons';

export default function Question({ questionAnswerData, setCurrIndex, currIndex, index }) {
  const { question, answer } = questionAnswerData;
  const [hover, setHover] = useState(false);
  const isSelected = index == currIndex;

  return (
    <QuestionAnswerContainer>
      <QuestionStyled onMouseEnter={() => {
        setHover(true);
      }}
        onMouseLeave={() => setHover(false)}
        hover={hover}
        onClick={() => {
          setCurrIndex(index);
        }}
        isSelected={isSelected}
        hover={isSelected ? false : hover}
      >{getString(question)} {isSelected && <ShortArrow src={icons.FILLED_SHORT_ARROW} alt="filled short arrow" />}
      </QuestionStyled>
      <AnswerStyled>
      {isSelected && <P>{getString(answer)}</P>}
      </AnswerStyled>
    </QuestionAnswerContainer>
  );
}
