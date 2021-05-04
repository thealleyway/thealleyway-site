import { getString } from '../../../../lib/richText';
import { icons } from '../../../../style/icons';
import {
  AdditionalInfo,
  AuthorInfoWrapper,
  AuthorName,
  DonateLink,
  DonateCircularText,
  SocialMediaIcon,
  SocialMediaLink,
} from './AuthorInfo.styles';

export default function AuthorInfo({ authorInfo, donateLink }) {
  const {
    additional_information,
    author_name,
    title,
    instagram,
    twitter,
  } = authorInfo;
  return (
    <AuthorInfoWrapper>
      <DonateLink href={donateLink.url} target="_blank" rel="noreferrer">
        <DonateCircularText src={icons.DONATE_CIRCULAR_TEXT} />
      </DonateLink>
      <div>
        <AuthorName>{getString(author_name)}</AuthorName>
        <AdditionalInfo>{getString(title)}</AdditionalInfo>
        <AdditionalInfo>{getString(additional_information)}</AdditionalInfo>
        <SocialMediaLink href={instagram.url} target="_blank" rel="noreferrer">
          <SocialMediaIcon src={icons.INSTAGRAM_ICON} />
        </SocialMediaLink>
        <SocialMediaLink href={twitter.url} target="_blank" rel="noreferrer">
          <SocialMediaIcon src={icons.TWITTER_ICON} />
        </SocialMediaLink>
      </div>
    </AuthorInfoWrapper>
  );
}
