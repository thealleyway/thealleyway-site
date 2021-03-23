import Text from "../components/Text";
import H3 from "../components/headers/H3";

export default function QuestionAnswer({ questionAnswerData }) {
  const { question, answer } = questionAnswerData;
  return (
    <>
      <H3 h3Data={question} />
      <Text textData={answer} />
    </>
  );
}
