import React from 'react';
import styled from 'styled-components';
import { getString } from "../../lib/richText";

const H3Style = styled.h3`
    font-size: 24px;
    font-family: aktiv-grotesk, sans-serif;
    font-weight: 700px; 
    font-style: italic; 
`;

export default function H3({ h3Data }) {

    return (
        <>
            <H3Style>{getString(h3Data)}</H3Style>
        </>
    )
}

