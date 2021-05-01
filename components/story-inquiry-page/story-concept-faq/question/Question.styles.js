import { H4, P, fontWeights } from '../../../../style/typography';
import styled from 'styled-components';
import {colors} from '../../../../style/colors';

const QuestionStyled = styled(H4)`
    font-weight: ${(props) =>
        props.isSelected || props.hover ? fontWeights.medium : fontWeights.normal};
    color: ${(props) => props.hover ? colors.SANDYYELLOW : colors.BROWN }
`;

export {
    QuestionStyled
}