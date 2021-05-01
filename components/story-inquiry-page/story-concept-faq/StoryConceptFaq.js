import { H1, H2, H3, P } from '../../../style/typography';
import { getString } from '../../../lib/richText';
import QuestionAnswer from '../../question-answer/QuestionAnswer';
import { FaqContainer } from './StoryConceptFaq.styles';
import React, { useState } from 'react';

export default function StoryConceptFaq({ storyConceptFaqData }) {
    const {
        faqTitle,
        questionsAndAnswers
    } = storyConceptFaqData;

    const [currIndex, setCurrIndex] = useState(questionsAndAnswers[0].id);

    return (
        <FaqContainer>
            <H2>{getString(faqTitle)}</H2>
            {
                questionsAndAnswers.map((item) => {
                    return <QuestionAnswer key={item.id} index={item.id} questionAnswerData={item} setCurrIndex={setCurrIndex}
                        currIndex={currIndex}
                    />
                })
            }
        </FaqContainer>)
}