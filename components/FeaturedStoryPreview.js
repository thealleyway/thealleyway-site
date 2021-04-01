import PageLink from '../components/pageLink/PageLink';
import { H3, P } from '../style/typography';
import { getString } from '../lib/richText';

export default function FeaturedStoryPreview({ featuredStoryData }) {
  const {
    uid: uid,
    preview_title_regular: previewTitleRegular,
    preview_title_italic: previewTitleItalic,
    preview_text: previewText,
    preview_image: previewImage,
    signature,
  } = featuredStoryData;
  return (
    <>
      <H3>{getString(previewTitleRegular)}</H3>
      <H3>{getString(previewTitleItalic)}</H3>
      <P>{getString(previewText)}</P>
      <img src={previewImage.url} alt={previewImage.alt} />
      <img src={signature.url} alt={signature.alt} />
      <PageLink href={'/story/' + uid}>Tell me more</PageLink>
    </>
  );
}
