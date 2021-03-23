import React from 'react';
import styled from 'styled-components';
import { getString } from "../../lib/richText";

const H2Style = styled.h2`
    font-size: 48px;
    font-family: cormorant-garamond, serif; 
    font-weight: 700px; 
    font-style: italic; 
`;

export default function H2({ h2Data }) {

    return (
        <>
            <H2Style>{getString(h2Data)}</H2Style>
        </>
    )
}

