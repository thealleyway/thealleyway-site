import { H4, P, fontWeights } from '../../../../style/typography';
import styled from 'styled-components';
import {colors} from '../../../../style/colors';

const QuestionStyled = styled(H4)`
    font-size: .9em;
    font-weight: ${(props) =>
        props.isSelected || props.hover ? fontWeights.medium : fontWeights.normal};
    color: ${(props) => props.hover ? colors.SANDYYELLOW : colors.BROWN };
`;

const ShortArrow = styled.img`
    width: 1.8em;
    transform: rotate(90deg);
    margin: 0;
`;

export {
    QuestionStyled,
    ShortArrow,
}