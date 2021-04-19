import React, { useEffect, useState } from 'react';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import {
  HomePageContentWrapper,
  FeaturedStoryPreviews,
} from './HomePage.styles';
import CurrentFeaturedStory from './currentFeaturedStory/CurrentFeaturedStory';
import FeaturedStoryPreview from './featuredStoryPreview/FeaturedStoryPreview';
import NewsletterSignUp from './newsletterSignUp/NewsletterSignUp';

const PREVIEW_CHANGE_IN_MILLISECONDS = 3000;

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
    newsletter_confirmation_title_1,
    newsletter_confirmation_title_2,
    newsletter_confirmation_description,
    newsletter_confirmation_image,
  } = homePageData;

  const newsletterConfirmationData = {
    newsletter_confirmation_title_1,
    newsletter_confirmation_title_2,
    newsletter_confirmation_description,
    newsletter_confirmation_image,
  };

  const getSignature = (authorInfoID) => authorSignatures[String(authorInfoID)];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(
      () => setActiveIndex((activeIndex + 1) % featuredStories.length),
      PREVIEW_CHANGE_IN_MILLISECONDS,
    );
    return () => clearTimeout(id);
  }, [activeIndex]);

  return (
    <>
      <Navigation navigationData={navigationData} />
      <HomePageContentWrapper>
        <CurrentFeaturedStory
          featuredStory={
            featuredStories[Number.parseInt(activeIndex)].story.data
          }
          signature={getSignature(
            featuredStories[Number.parseInt(activeIndex)].story.data.author_info
              .id,
          )}
          url={`/story/${
            featuredStories[Number.parseInt(activeIndex)].story.uid
          }`}
        />
        <FeaturedStoryPreviews>
          {featuredStories.map((featuredStory, index) => {
            return (
              <FeaturedStoryPreview
                active={index === activeIndex}
                featuredStory={featuredStory.story}
                key={featuredStory.story.id}
                onHover={() => setActiveIndex(index)}
                signature={getSignature(
                  featuredStory.story.data.author_info.id,
                )}
              />
            );
          })}
        </FeaturedStoryPreviews>
        <NewsletterSignUp
          description={newsletterDescription}
          newsletterConfirmationData={newsletterConfirmationData}
          privacyPolicyLinkTitle={privacyPolicyLinkTitle}
          privacyPolicyText={privacyPolicyText}
          title={newsletterSignup}
        />
      </HomePageContentWrapper>
      <Footer footerData={footerData} />
    </>
  );
}
