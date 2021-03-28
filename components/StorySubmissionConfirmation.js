import { renderRichText } from "../lib/richText";

export default function StorySubmissionConfirmation({ title, description }) {
  return (
    <>
      {renderRichText(title)}
      {renderRichText(description)}
    </>
  );
}