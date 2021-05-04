
import styled from 'styled-components';
import { min } from '../../../lib/responsive';
import { colors } from '../../../style/colors';
import {H2, fontWeights} from '../../../style/typography';

const FaqTitle = styled(H2)`
    @media ${min.mobile} {
        
    }
`;

const FaqContainer = styled.div`
margin: 8em 3.5em 0 4em;
@media ${min.tablet} {
    margin: 8em 0 0 3.5em;
}
@media ${min.desktop} {
    margin: 8em 0 0 16.5em;
}
`;

const QuestionAnswerContainer = styled.div`
@media ${min.tablet} {
    display: flex;
}
`;

const QuestionContainer = styled.div`
@media ${min.tablet} {
    width: 40%;
}
`;

const AnswerContainer = styled.div`
display: none;
@media ${min.tablet} {
    display: block;
    width: 60%;
    margin: 0 2.5em 0 4em;
}
@media ${min.desktop} {
    width: 38%;
    margin: 0 5em 0 4em;
}
`;

export {
    FaqContainer,
    QuestionAnswerContainer,
    QuestionContainer,
    AnswerContainer,
}