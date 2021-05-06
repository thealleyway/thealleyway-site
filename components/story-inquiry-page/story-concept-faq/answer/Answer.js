import { P } from '../../../../style/typography';
import { getString } from '../../../../lib/richText';
import React from 'react';

export default function Answer({ answer }) {
  let answerString;
  if (answer) {
    answerString = getString(answer);
    if (answerString.length > 430) {
      answerString = answerString.slice(0, 430) + '...';
    }
  } else {
    answerString = '';
  }

  return (
    <>
      {' '}
      <P>{answerString}</P>
    </>
  );
}
