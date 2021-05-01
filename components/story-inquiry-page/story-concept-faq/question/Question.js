import { H4, P } from '../../../../style/typography';
import { getString } from '../../../../lib/richText';
import { QuestionStyled } from './Question.styles';
import React, { useState } from 'react';

export default function Question({ questionAnswerData, setCurrIndex, currIndex, index }) {
  const { question, answer } = questionAnswerData;
  const [hover, setHover] = useState(false);
  const isSelected = index == currIndex;
  return (
    <>
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
      >{getString(question)}</QuestionStyled>
      {/* {isSelected && <P>{getString(answer)}</P>} */}
    </>
  );
}
