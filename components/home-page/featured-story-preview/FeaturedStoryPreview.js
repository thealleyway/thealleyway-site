import { icons } from '../../../style/icons';
import PageLink from '../../page-link/PageLink';
import { SignatureImage } from '../HomePage.styles';
import {
  Arrow,
  DoubleArchways,
  FeaturedStoryPreviewText,
  FeaturedStoryPreviewTitle,
  FeaturedStoryPreviewWrapper,
  PreviewImage,
} from './FeaturedStoryPreview.styles';
import { getString } from '../../../lib/richText';

export default function FeaturedStoryPreview({
  active,
  featuredStory,
  onClick,
  onHover,
  signature,
}) {
  const { data, uid } = featuredStory;

  const {
    preview_image: previewImage,
    story_preview_text: previewText,
    story_preview_title_italic: titleItalic,
    story_preview_title_regular: titleRegular,
  } = data;

  return (
    <PageLink href={`/story/${uid}`} passHref>
      <FeaturedStoryPreviewWrapper onMouseOver={onHover} onClick={onClick}>
        <PreviewImage
          src={previewImage.url}
          alt={previewImage.alt}
          active={active}
        />
        <DoubleArchways
          src={icons.DOUBLE_ARCHWAY_NO_BACKGROUND}
          alt={'double-archway'}
          active={active}
        />
        <SignatureImage src={signature.url} alt={signature.alt} />
        <FeaturedStoryPreviewTitle>
          {getString(titleRegular)} <i>{`${getString(titleItalic)}`}</i>
        </FeaturedStoryPreviewTitle>
        <FeaturedStoryPreviewText>
          {getString(previewText)}
        </FeaturedStoryPreviewText>
        <Arrow src={icons.FILLED_MEDIUM_ARROW_WHITE} />
      </FeaturedStoryPreviewWrapper>
    </PageLink>
  );
}
