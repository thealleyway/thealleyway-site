import { getString } from '../../../lib/richText';
import { icons } from '../../../style/icons';
import { colors } from '../../../style/colors';
import PageLink from '../../page-link/PageLink';
import {
  CurrentFeaturedStoryButton,
  CurrentFeaturedStoryButtonText,
  CurrentFeaturedStoryH1,
  CurrentFeaturedStoryImage,
  CurrentFeaturedStoryImageWrapper,
  CurrentFeaturedStorySignatureImage,
  CurrentFeaturedStoryTextWrapper,
  CurrentFeaturedStoryWrapper,
  PreviewText,
} from './CurrentFeaturedStory.styles';

export default function CurrentFeaturedStory({
  featuredStory,
  signature,
  url,
}) {
  const {
    preview_image: previewImage,
    story_preview_text: previewText,
    story_preview_title_italic: titleItalic,
    story_preview_title_regular: titleRegular,
  } = featuredStory;

  return (
    <CurrentFeaturedStoryWrapper 
    initial={{ opacity: 0 }}
    animate={{opacity: 1}}
    transition={{ duration: 1, delay: 0.1 }}
    >
      <CurrentFeaturedStoryImageWrapper>
        <CurrentFeaturedStoryImage
          src={previewImage.url}
          alt={previewImage.alt}
        />
        <CurrentFeaturedStorySignatureImage
          src={signature.url}
          alt={signature.alt}
        />
      </CurrentFeaturedStoryImageWrapper>
      <CurrentFeaturedStoryTextWrapper>
        <CurrentFeaturedStoryH1>
          {getString(titleRegular)} <i>{`${getString(titleItalic)}`}</i>
        </CurrentFeaturedStoryH1>
        <PreviewText>{getString(previewText)}</PreviewText>
        <PageLink href={url} passHref>
          <CurrentFeaturedStoryButton
            color={colors.BROWN}
            url={icons.UNFILLED_LONG_ARROW}
          >
            <CurrentFeaturedStoryButtonText>
              TELL ME MORE
            </CurrentFeaturedStoryButtonText>
          </CurrentFeaturedStoryButton>
        </PageLink>
      </CurrentFeaturedStoryTextWrapper>
    </CurrentFeaturedStoryWrapper>
  );
}
