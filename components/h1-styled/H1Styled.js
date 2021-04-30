import { getString } from '../../lib/richText';
import { H1Container, H1Italicized, H1Regular, H1Italicized1, H1Italicized2, H1ItalicizedContainer } from './H1Styled.styles';

export default function H1Styled({ regular, italicized }) {

  let longItalicized = false;
  let firstItalicized;
  let secondItalicized;
  const fullItalicized = getString(italicized).trim().split(' ');
  const length = fullItalicized.length;
  if (length > 1) {
    longItalicized = true;
    firstItalicized = fullItalicized[0];
    secondItalicized = fullItalicized.slice(1, length);
    secondItalicized = secondItalicized.join(' ');
  }

  return (
    <H1Container longItalicized={longItalicized}>
      <H1Regular longItalicized={longItalicized}>{getString(regular)}</H1Regular>
      {!longItalicized &&
        <H1Italicized>
          <i>{getString(italicized)}</i>
        </H1Italicized>}
      {longItalicized &&
        <H1ItalicizedContainer>
          <H1Italicized1 >
            <i>{firstItalicized}</i>
          </H1Italicized1>
          <H1Italicized2 >
            <i>{secondItalicized}</i>
          </H1Italicized2>
        </H1ItalicizedContainer>}
    </H1Container>
  );
}
