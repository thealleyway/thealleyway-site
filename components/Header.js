import React from 'react';
import styled from 'styled-components';
import { getString } from "../lib/richText";

const HeaderTitle = styled.h1`
    font-size: 80px;

`;

export default function H1({ headerData }) {

    return (
        <>
            <HeaderTitle>{getString(headerData)}</HeaderTitle>
        </>
    )
}

