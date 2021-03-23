import React from 'react';
import styled from 'styled-components';
import { getString } from "../../lib/richText";

const H1Title = styled.h1`
    font-size: 80px;
    font-weight: bold; 
    font-style: italic; 
`;

export default function H1({ h1Data }) {

    return (
        <>
            <H1Title>{getString(h1Data)}</H1Title>
        </>
    )
}

