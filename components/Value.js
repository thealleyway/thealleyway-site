import { getString } from "../lib/richText";

export default function Value({ valueData }) {
  const {
    value_title: title,
    value_description: description,
    value_image: valueImage,
  } = valueData;
  return (
    <>
      {getString(title)}
      <br />
      {getString(description)}
      <br />
      <img src={valueImage.url} alt={valueImage.alt} />
      <br />
    </>
  );
}