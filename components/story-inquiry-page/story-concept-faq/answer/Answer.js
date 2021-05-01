import { H4, P } from '../../../../style/typography';
import { getString } from '../../../../lib/richText';
import React, { useState } from 'react';

export default function Answer({ answer}) {
    return (
        <> <P>{getString(answer)}</P>
        </>
    );
}
