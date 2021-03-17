import { renderRichText } from "../lib/richText";

export default function AuthorTestimony({ authorTestimonyData }) {
  const { author_name: authorName, author_testimony: authorTestimony } = authorTestimonyData;
  return (
    <>
      {renderRichText(authorName)}
      {renderRichText(authorTestimony)}
    </>
  );
}
