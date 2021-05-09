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
  change,
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
    <PageLink href={change ? `/story/${uid}` : '/'} passHref>
      <FeaturedStoryPreviewWrapper
        onMouseOver={onHover}
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <PreviewImage
          src={previewImage.url}
          alt={previewImage.alt}
          active={active}
        />
          <DoubleArchways
            src={icons.DOUBLE_ARCHWAY_NO_BACKGROUND}
            alt={'double-archway'}
            active={active}
            animate={{ opacity: active ? [0, 1, 0] : 0 }}
            transition={{ type: 'spring', duration: 2 }}
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
