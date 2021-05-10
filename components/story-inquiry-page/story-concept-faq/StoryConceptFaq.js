import { H2 } from '../../../style/typography';
import { getString } from '../../../lib/richText';
import Question from './question/Question';
import {
  FaqContainer,
  QuestionAnswerContainer,
  QuestionContainer,
  AnswerContainer,
  ScrollToFaq,
  SparkArrowContainer,
} from './StoryConceptFaq.styles';
import Answer from './answer/Answer';
import LongSparkArrow from '../../long-spark-arrow/LongSparkArrow';
import React, { useState } from 'react';
import { breakpointsObj } from '../../../lib/responsive';
import { useMatchMedia } from '../../../lib/hooks';

export default function StoryConceptFaq({
  storyConceptFaqData,
  sparkArrowAuthorTestimoniesText,
}) {
  const isMobile = useMatchMedia(`(max-width: ${breakpointsObj.tabletSm}px)`);

  const { faqTitle, questionsAndAnswers } = storyConceptFaqData;
  const [currIndex, setCurrIndex] = useState(questionsAndAnswers[0].id);
  const currAnswer =
    isMobile && !currIndex
      ? ''
      : questionsAndAnswers.find((item) => item.id == currIndex).answer;

  return (
    <>
      <ScrollToFaq id="faq" />
      <SparkArrowContainer>
        <LongSparkArrow
          arrowText={sparkArrowAuthorTestimoniesText}
          scrollTo="author testimonies"
        />
      </SparkArrowContainer>
      <FaqContainer>
        <H2>{getString(faqTitle)}</H2>
        <QuestionAnswerContainer>
          <QuestionContainer>
            {questionsAndAnswers.map((item) => {
              return (
                <Question
                  key={item.id}
                  index={item.id}
                  questionAnswerData={item}
                  setCurrIndex={setCurrIndex}
                  currIndex={currIndex}
                />
              );
            })}
          </QuestionContainer>
          <AnswerContainer>
            <Answer answer={currAnswer} />
          </AnswerContainer>
        </QuestionAnswerContainer>
      </FaqContainer>
    </>
  );
}
