import { H2 } from '../../../style/typography';
import { getString } from '../../../lib/richText';
import Question from './question/Question';
import {
  FaqContainer,
  QuestionAnswerContainer,
  QuestionContainer,
  AnswerContainer,
  ScrollToFaq,
} from './StoryConceptFaq.styles';
import Answer from './answer/Answer';
import { breakpointsObj } from '../../../lib/responsive';
import { useMatchMedia } from '../../../lib/hooks';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../../lib/intersectionObserver';
import {
  PlaceHolder,
} from '../story-inquiry-form/StoryInquiryForm.styles';

export default function StoryConceptFaq({ storyConceptFaqData }) {
  const isMobile = useMatchMedia(`(max-width: ${breakpointsObj.tabletSm}px)`);
  const { faqTitle, questionsAndAnswers } = storyConceptFaqData;
  const [currIndex, setCurrIndex] = useState(questionsAndAnswers[0].id);
  const currAnswer =
    isMobile && !currIndex
      ? ''
      : questionsAndAnswers.find((item) => item.id == currIndex).answer;

  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  if (visible) {
    return (
      <>
        <ScrollToFaq id="faq" />
        <FaqContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}>
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
  return <PlaceHolder ref={placeHolderRef}> </PlaceHolder>;
}
