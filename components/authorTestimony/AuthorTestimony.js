import { P } from "../../style/typography";
import { getString } from "../../lib/richText";
export default function AuthorTestimony({ authorTestimonyData }) {
  const { author_name: authorName, author_testimony: authorTestimony } = authorTestimonyData;
  return (
    <>
      <P>{getString(authorName)}</P>
      <P>{getString(authorTestimony)}</P>
    </>
  );
}
