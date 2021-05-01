import { H4, P, fontWeights } from '../../style/typography';
import styled from 'styled-components';

const Question = styled(H4)`
    font-weight: ${(props) =>
        props.isSelected ? fontWeights.medium : fontWeights.normal};
`;

export {
    Question,
}