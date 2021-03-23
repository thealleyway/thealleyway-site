import React from 'react';
import styled from 'styled-components';
import { getString } from "../../lib/richText";

const H2Title = styled.h2`
    font-size: 48px;
    font-weight: bold; 
    font-style: italic; 
`;

export default function H2({ h2Data }) {

    return (
        <>
            <H2Title>{getString(h2Data)}</H2Title>
        </>
    )
}

