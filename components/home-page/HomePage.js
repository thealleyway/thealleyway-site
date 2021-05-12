import React, { useEffect, useState } from 'react';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import {
  HomePageContentWrapper,
  FeaturedStoryPreviews,
  AlleywayLogo,
  AlleywayEmblem,
  HomePageIntroContainerLarge,
  HomePageIntroContainerSmall,
} from './HomePage.styles';
import CurrentFeaturedStory from './current-featured-story/CurrentFeaturedStory';
import FeaturedStoryPreview from './featured-story-preview/FeaturedStoryPreview';
import NewsletterSignUp from './newsletter-sign-up/NewsletterSignUp';
import { icons } from '../../style/icons';
import { breakpointsObj } from '../../lib/responsive';
import { useMatchMedia } from '../../lib/hooks';

const PREVIEW_CHANGE_IN_MILLISECONDS = 4000;

export default function HomePage({
  authorSignatures,
  homePageData,
  navigationData,
  footerData,
}) {
  const {
    featured_stories: featuredStories,
    newsletter_signup: newsletterSignup,
    newsletter_description: newsletterDescription,
    privacy_policy_link_title: privacyPolicyLinkTitle,
    privacy_policy_text: privacyPolicyText,
    newsletter_confirmation_title_regular: confirmationTitleRegular,
    newsletter_confirmation_title_italic: confirmationTitleItalic,
    newsletter_confirmation_description: confirmationDescription,
    newsletter_confirmation_image: confirmationImage,
  } = homePageData;

  const newsletterConfirmationData = {
    confirmationTitleRegular,
    confirmationTitleItalic,
    confirmationDescription,
    confirmationImage,
  };

  const isMobile = useMatchMedia(`(max-width: ${breakpointsObj.tabletSm}px)`);
  const getSignature = (authorInfoID) => authorSignatures[String(authorInfoID)];
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadedLong, setFadedLong] = useState(false);
  const [fadedShort, setFadedShort] = useState(false);

  setTimeout(() => setFadedLong(true), 4000);
  setTimeout(() => setFadedShort(true), 3000);
  const [fadeInCurrentFeatured, setFadeInCurrentFeatured] = useState(true);

  useEffect(() => {
    var fadeIn;
    var fadeOut;
    const id = setTimeout(() => {
      fadeIn = setTimeout(() => {
        setFadeInCurrentFeatured(true);
        setActiveIndex((activeIndex + 1) % featuredStories.length);
      }, PREVIEW_CHANGE_IN_MILLISECONDS);

      fadeOut = setTimeout(() => {
        setFadeInCurrentFeatured(false);
      }, PREVIEW_CHANGE_IN_MILLISECONDS / 2);
    }, PREVIEW_CHANGE_IN_MILLISECONDS);
    return () => {
      clearTimeout(id);
      clearTimeout(fadeIn);
      clearTimeout(fadeOut);
    };
  }, [activeIndex]);

  const mapFeaturedStories = (featuredStory, index) => {
    return (
      <FeaturedStoryPreview
        active={index === activeIndex}
        featuredStory={featuredStory.story}
        key={featuredStory.story.id}
        onHover={() => {
          setActiveIndex(index);
        }}
        signature={getSignature(featuredStory.story.data.author_info.id)}
      />
    );
  };

  return (
    <>
      {fadedLong && !isMobile && (
        <Navigation navigationData={navigationData} fade wait />
      )}
      {fadedShort && isMobile && (
        <Navigation navigationData={navigationData} fade wait />
      )}
      <HomePageContentWrapper>
        {fadedLong && !isMobile && (
          <CurrentFeaturedStory
            fadeIn={fadeInCurrentFeatured}
            featuredStory={
              featuredStories[Number.parseInt(activeIndex)].story.data
            }
            signature={getSignature(
              featuredStories[Number.parseInt(activeIndex)].story.data
                .author_info.id,
            )}
            url={`/story/${
              featuredStories[Number.parseInt(activeIndex)].story.uid
            }`}
          />
        )}
        {!fadedLong && !isMobile && (
          <HomePageIntroContainerLarge
            animate={{ opacity: [0, 1, 0] }}
            transition={{ type: 'spring', duration: 4 }}
          >
            <AlleywayLogo src={icons.LARGE_ALLEYWAY_LOGO} />
          </HomePageIntroContainerLarge>
        )}
        {isMobile && !fadedShort && (
          <HomePageIntroContainerSmall>
            <AlleywayEmblem
              src={icons.LARGE_ALLEYWAY_EMBLEM}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0, x: -120, y: -270, scale: 0.4 }}
              transition={{ type: 'spring', duration: 3, delay: 1 }}
            />
            <FeaturedStoryPreviews
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: -420 }}
              transition={{ type: 'spring', duration: 3, delay: 1 }}
            >
              {featuredStories.map(mapFeaturedStories)}
            </FeaturedStoryPreviews>
          </HomePageIntroContainerSmall>
        )}
        {isMobile && fadedShort && (
          <FeaturedStoryPreviews>
            {featuredStories.map(mapFeaturedStories)}
          </FeaturedStoryPreviews>
        )}
        {!isMobile && (
          <FeaturedStoryPreviews
            animate={{ opacity: [0, 1] }}
            transition={{ type: 'spring', duration: 7 }}
          >
            {featuredStories.map(mapFeaturedStories)}
          </FeaturedStoryPreviews>
        )}
        {fadedLong && (
          <NewsletterSignUp
            description={newsletterDescription}
            newsletterConfirmationData={newsletterConfirmationData}
            privacyPolicyLinkTitle={privacyPolicyLinkTitle}
            privacyPolicyText={privacyPolicyText}
            title={newsletterSignup}
          />
        )}
        {fadedShort && !fadedLong && (
          <NewsletterSignUp
            description={newsletterDescription}
            newsletterConfirmationData={newsletterConfirmationData}
            privacyPolicyLinkTitle={privacyPolicyLinkTitle}
            privacyPolicyText={privacyPolicyText}
            title={newsletterSignup}
          />
        )}
      </HomePageContentWrapper>
      {fadedLong && <Footer footerData={footerData} />}
      {fadedShort && !fadedLong && <Footer footerData={footerData} />}
    </>
  );
}
