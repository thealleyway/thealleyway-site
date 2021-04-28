import { getString } from '../../lib/richText';
import { H3, P } from '../../style/typography';

export default function Value({ valueData }) {
  const {
    value_title: title,
    value_description: description,
    value_image: valueImage,
  } = valueData;
  return (
    <>
      <H3>{getString(title)}</H3>
      <br />
      <P>{getString(description)}</P>
      <br />
      <img src={valueImage.url} alt={valueImage.alt} />
      <br />
    </>
  );
}
