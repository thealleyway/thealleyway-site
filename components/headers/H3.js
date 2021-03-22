import React from 'react';
import styled from 'styled-components';
import { getString } from "../../lib/richText";

const H3Title = styled.h3`
    font-size: 24px;

`;

export default function H3({ h3Data }) {

    return (
        <>
            <H3Title>{getString(h3Data)}</H3Title>
        </>
    )
}

