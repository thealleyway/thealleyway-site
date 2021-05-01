import { H4, P } from '../../style/typography';
import { getString } from '../../lib/richText';
import { Question } from './QuestionAnswer.styles';
import React, { useState } from 'react';

export default function QuestionAnswer({ questionAnswerData, setCurrIndex, currIndex, index }) {
  const { question, answer } = questionAnswerData;
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [bold, setBold] = useState(false);
  return (
    <>
      <Question onMouseEnter={() => {
        setHover(true);
      }}
        onMouseLeave={() => setHover(false)}
        clicked={clicked}
        hover={hover}
        onClick={() => {
          setCurrIndex(index);
        }}
        isSelected={index == currIndex}
      >{getString(question)}</Question>
      <P>{getString(answer)}</P>
    </>
  );
}
