import { P } from '../../../../style/typography';
import { getString } from '../../../../lib/richText';
import React from 'react';

export default function Answer({ answer }) {
  let answerString = getString(answer);
  if (answerString.length > 430) {
    answerString = answerString.substring(0, 430) + '...';
  }
  return (
    <>
      {' '}
      <P>{answerString}</P>
    </>
  );
}
