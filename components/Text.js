import React from 'react';
import styled from 'styled-components';
import { getString } from "../lib/richText";

const TextStyle = styled.p`
    font-size: 14px;
    font-family: aktiv-grotesk, sans-serif;
`;

export default function Text({ textData }) {

    return (
        <>
            <TextStyle>{getString(textData)}</TextStyle>
        </>
    )
}

