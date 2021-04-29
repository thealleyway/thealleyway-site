import { getString } from '../../lib/richText';
import { H1Container, H1Italicized, H1Regular, H1Italicized1, H1Italicized2, H1ItalicizedContainer } from './H1Styled.styles';

export default function H1Styled({ regular, italicized, storyInquiry }) {
  let firstItalicized;
  let secondItalicized;
  if (storyInquiry) {
    const fullItalicized = getString(italicized).trim().split(' ');
    firstItalicized = fullItalicized[0];
    secondItalicized = fullItalicized[1];
  }

  return (
    <H1Container storyInquiry={storyInquiry}>
      <H1Regular storyInquiry={storyInquiry}>{getString(regular)}</H1Regular>
      {!storyInquiry &&
        <H1Italicized>
          <i>{getString(italicized)}</i>
        </H1Italicized>}
      {storyInquiry &&
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
