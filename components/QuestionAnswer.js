import { renderRichText } from "../lib/richText";

export default function QuestionAnswer({ questionAnswerData }) {
  const { question, answer } = questionAnswerData;
  return (
    <>
      {renderRichText(question)}
      {renderRichText(answer)}
    </>
  );
}
