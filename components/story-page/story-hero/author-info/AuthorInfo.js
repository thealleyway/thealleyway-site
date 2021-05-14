import { getString } from '../../../../lib/richText';
import { icons } from '../../../../style/icons';
import {
  AdditionalInfo,
  AuthorInfoWrapper,
  AuthorTextWrapper,
  AuthorName,
  DonateLink,
  DonateCircularText,
  SocialMediaIcon,
  SocialMediaLink,
} from './AuthorInfo.styles';
import { useState } from 'react';

export default function AuthorInfo({ authorInfo, donateLink }) {
  const {
    additional_information,
    author_name,
    title,
    instagram,
    twitter,
  } = authorInfo;

  const [hover, setHover] = useState(false);

  return (
    <AuthorInfoWrapper>
      <DonateLink
        href={donateLink.url}
        target="_blank"
        rel="noreferrer"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {!hover && <DonateCircularText src={icons.DONATE_CIRCULAR_TEXT} />}
        {hover && (
          <DonateCircularText
            src={icons.FILLED_DONATE_CIRCULAR_TEXT}
            animate={{ rotate: 360, y: -15, x: -15 }}
            transition={{
              ease: 'linear',
              repeat: Number.POSITIVE_INFINITY,
              duration: 20,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
          />
        )}
      </DonateLink>
      <AuthorTextWrapper>
        <AuthorName>{getString(author_name)}</AuthorName>
        <AdditionalInfo>{getString(title)}</AdditionalInfo>
        <AdditionalInfo>{getString(additional_information)}</AdditionalInfo>
        <SocialMediaLink href={instagram.url} target="_blank" rel="noreferrer">
          <SocialMediaIcon src={icons.INSTAGRAM_ICON} />
        </SocialMediaLink>
        <SocialMediaLink href={twitter.url} target="_blank" rel="noreferrer">
          <SocialMediaIcon src={icons.TWITTER_ICON} />
        </SocialMediaLink>
      </AuthorTextWrapper>
    </AuthorInfoWrapper>
  );
}
