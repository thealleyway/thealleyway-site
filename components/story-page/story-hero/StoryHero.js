import { getFormattedDate } from '../../../lib/date';
import { useMatchMedia } from '../../../lib/hooks';
import { breakpointsObj } from '../../../lib/responsive';
import { getString } from '../../../lib/richText';
import AuthorInfo from './author-info/AuthorInfo';
import {
  DesktopHero,
  HeroLeftWrapper,
  HeroRightWrapper,
  MobileHeroImage,
  MobileHeroWrapper,
  MobileTextWrapper,
  PrimaryImage1,
  PrimaryImage2,
  PrimaryImage3,
  RightImagesWrapper,
  SignatureImage,
  StoryDate,
  StoryTitle,
  TextWrapper,
} from './StoryHero.styles';

const HeroLeftSection = ({ primaryImage1, authorInfo, donateLink }) => {
  const { signature } = authorInfo;
  return (
    <HeroLeftWrapper>
      <PrimaryImage1 src={primaryImage1.url} />
      <SignatureImage src={signature.url} />
      <AuthorInfo authorInfo={authorInfo} donateLink={donateLink} />
    </HeroLeftWrapper>
  );
};

const HeroRightSection = ({
  storyTitle,
  storyDate,
  primaryImage2,
  primaryImage3,
}) => {
  return (
    <HeroRightWrapper>
      <RightImagesWrapper>
        <PrimaryImage2 src={primaryImage2.url} />
        <PrimaryImage3 src={primaryImage3.url} />
      </RightImagesWrapper>
      <TextWrapper>
        <StoryTitle>{getString(storyTitle)}</StoryTitle>
        <StoryDate>{storyDate}</StoryDate>
      </TextWrapper>
    </HeroRightWrapper>
  );
};

export const MobileHero = ({
  authorInfo,
  donateLink,
  primaryImage1,
  storyTitle,
  storyDate,
}) => {
  const { signature } = authorInfo;
  return (
    <MobileHeroWrapper>
      <MobileTextWrapper>
        <StoryDate>{storyDate}</StoryDate>
        <StoryTitle>{getString(storyTitle)}</StoryTitle>
        <MobileHeroImage src={primaryImage1.url} />
      </MobileTextWrapper>
      <SignatureImage src={signature.url} />
      <AuthorInfo authorInfo={authorInfo} donateLink={donateLink} />
    </MobileHeroWrapper>
  );
};

export default function StoryHero({
  authorInfo,
  storyTitle,
  storyDate,
  primaryImage1,
  primaryImage2,
  primaryImage3,
  donateLink,
}) {
  const date = getFormattedDate(new Date(storyDate));
  const isMobile = useMatchMedia(`(max-width: ${breakpointsObj.tabletSm}px)`);

  return isMobile ? (
    <MobileHero
      authorInfo={authorInfo}
      donateLink={donateLink}
      primaryImage1={primaryImage1}
      storyDate={date}
      storyTitle={storyTitle}
    />
  ) : (
    <DesktopHero>
      <HeroLeftSection
        authorInfo={authorInfo}
        donateLink={donateLink}
        primaryImage1={primaryImage1}
      />
      <HeroRightSection
        primaryImage2={primaryImage2}
        primaryImage3={primaryImage3}
        storyDate={date}
        storyTitle={storyTitle}
      />
    </DesktopHero>
  );
}
