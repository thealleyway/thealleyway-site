import { H3, P } from "../../style/typography";
import { getString } from "../../lib/richText";

export default function QuestionAnswer({ questionAnswerData }) {
  const { question, answer } = questionAnswerData;
  return (
    <>
      <H3>{getString(question)}</H3>
      <P>{getString(answer)}</P>
    </>
  );
}
