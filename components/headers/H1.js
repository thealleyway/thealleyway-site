import React from 'react';
import styled from 'styled-components';
import { getString } from "../../lib/richText";

const H1Style = styled.h1`
    font-size: 80px;
    font-family: cormorant-garamond, serif; 
    font-style: italic; 
    font-weight: 900px;
`;

export default function H1({ h1Data }) {

    return (
        <>
            <H1Style>{getString(h1Data)}</H1Style>
        </>
    )
}

