import { getString } from '../../lib/richText';
import { H1Container, H1Italicized, H1Regular } from './H1Styled.styles';

export default function H1Styled({ regular, italicized }) {
  return (
    <H1Container>
      <H1Regular>{getString(regular)}</H1Regular>
      <H1Italicized>
        <i>{getString(italicized)}</i>
      </H1Italicized>
    </H1Container>
  );
}
