import { H1Regular, H3 } from '../../style/typography';
import { getString } from '../../lib/richText';

export default function NewsletterConfirmation({ newsletterConfirmationData }) {
  const {
    newsletter_confirmation_title_1: title1,
    newsletter_confirmation_title_2: title2,
    newsletter_confirmation_description: description,
    newsletter_confirmation_image: image,
  } = newsletterConfirmationData;
  return (
    <>
      <H1Regular>{getString(title1)}</H1Regular>
      <H1Regular>
        <i>{getString(title2)}</i>
      </H1Regular>
      <H3>{getString(description)}</H3>
      <img src={image.url} alt={image.alt} />
    </>
  );
}
