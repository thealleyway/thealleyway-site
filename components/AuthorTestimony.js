import Text from "../components/Text";

export default function AuthorTestimony({ authorTestimonyData }) {
  const { author_name: authorName, author_testimony: authorTestimony } = authorTestimonyData;
  return (
    <>
      <Text textData={authorName} />
      <Text textData={authorTestimony} />
    </>
  );
}
