import { renderRichText } from '../../lib/richText';

export default function ContactConfirmation({ contactConfirmationData }) {
  const {
    contact_confirmation_title_regular_1: contactConfirmationTitleRegular1,
    contact_confirmation_title_italic_2: contactConfirmationTitleItalic2,
    contact_confirmation_title_regular_3: contactConfirmationTitleRegular3,
    contact_confirmation_description: description,
    contact_confirmation_image: image,
  } = contactConfirmationData;

  return (
    <>
      {renderRichText(contactConfirmationTitleRegular1)}
      {renderRichText(contactConfirmationTitleItalic2)}
      {renderRichText(contactConfirmationTitleRegular3)}
      {renderRichText(description)}
      <img src={image.url} alt={image.alt} />
    </>
  );
}
