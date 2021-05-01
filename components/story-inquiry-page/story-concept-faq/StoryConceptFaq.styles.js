
import styled from 'styled-components';
import { min } from '../../../lib/responsive';
import { colors } from '../../../style/colors';
import {H4, fontWeights} from '../../../style/typography';

const FaqContainer = styled.div`
    margin: 8em 0 0 15em;
`;

const QuestionAnswerContainer = styled.div`
    display: flex;
`;

const QuestionContainer = styled.div`
    width: 40%;
`;

const AnswerContainer = styled.div`
    width: 40%;
    margin: 0 5em 0 4em;
`;

export {
    FaqContainer,
    QuestionAnswerContainer,
    QuestionContainer,
    AnswerContainer
}