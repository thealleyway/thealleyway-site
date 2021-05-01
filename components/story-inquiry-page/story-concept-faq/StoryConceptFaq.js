import { H1, H2, H3, P } from '../../../style/typography';
import { getString } from '../../../lib/richText';
import Question from './question/Question';
import { FaqContainer, QuestionAnswerContainer, QuestionContainer, AnswerContainer } from './StoryConceptFaq.styles';
import Answer from './answer/Answer';
import React, { useState } from 'react';

export default function StoryConceptFaq({ storyConceptFaqData }) {
    const {
        faqTitle,
        questionsAndAnswers
    } = storyConceptFaqData;

    const [currIndex, setCurrIndex] = useState(questionsAndAnswers[0].id);
    const currAnswer = questionsAndAnswers.find((item) => item.id == currIndex).answer;
    return (
        <FaqContainer>
            <H2>{getString(faqTitle)}</H2>
            <QuestionAnswerContainer>
                <QuestionContainer>
                    {
                        questionsAndAnswers.map((item) => {
                            return <Question key={item.id} index={item.id} questionAnswerData={item} setCurrIndex={setCurrIndex}
                                currIndex={currIndex}
                            />
                        })
                    }
                </QuestionContainer>
                <AnswerContainer>
                    <Answer answer={currAnswer} />
                </AnswerContainer>
            </QuestionAnswerContainer>
        </FaqContainer>)
}