import { P } from '../../../../style/typography';
import { getString } from '../../../../lib/richText';
import React from 'react';
import { truncateString } from '../../../../lib/utils';

export default function Answer({ answer }) {
  const answerString = truncateString(getString(answer), 430);

  return (
    <>
      {' '}
      <P>{answerString}</P>
    </>
  );
}
