import { getString } from "../../lib/richText";

export default function Value({ valueData }) {
  const {
    value_title: title,
    value_description: description
  } = valueData;
  return (
    <>
      {getString(title)}
      <br />
      {getString(description)}
      <br />
      <br />
    </>
  );
}