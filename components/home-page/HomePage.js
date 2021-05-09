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
import { useSpring } from 'react-spring';
import { fadeIn } from '../../style/animations';
import { breakpointsObj } from '../../lib/responsive';
import { useMatchMedia } from '../../lib/hooks';

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
  const [alreadyHovered, setAlreadyHovered] = useState(false);
  const [firstTapped, setFirstTapped]  = useState(false);
  const [secondTapped, setSecondTapped]  = useState(false);
  const fadeInAnimation = useSpring(fadeIn);
  const [faded, setFade] = useState(false);
  
  setTimeout(() => setFade(true), 3000);

  useEffect(() => {
    const id = setTimeout(
      () => setActiveIndex((activeIndex + 1) % featuredStories.length),
      PREVIEW_CHANGE_IN_MILLISECONDS,
    );
    return () => clearTimeout(id);
  }, [activeIndex]);

  const mapFeaturedStories = (featuredStory, index) => {
    return (
      <FeaturedStoryPreview
        active={index === activeIndex}
        featuredStory={featuredStory.story}
        key={featuredStory.story.id}
        onHover={() => {
          setAlreadyHovered(true);
          setActiveIndex(index);
        }}
        onClick={() => {
          setSecondTapped(true); 
        }}
        change={secondTapped}
        alreadyHovered={alreadyHovered}
        signature={getSignature(featuredStory.story.data.author_info.id)}
      />
    );
  };

  return (
    <>
      {alreadyHovered && <Navigation navigationData={navigationData} fade={!isMobile} />}
      {alreadyHovered ||
        (faded && isMobile && (
          <Navigation navigationData={navigationData} fade />
        ))}
      <HomePageContentWrapper>
        {alreadyHovered && (
          <CurrentFeaturedStory
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
        {!alreadyHovered && (
          <HomePageIntroContainerLarge style={fadeInAnimation}>
            <AlleywayLogo src={icons.LARGE_ALLEYWAY_LOGO} />
            <FeaturedStoryPreviews onTap={() => firstTapped ? setSecondTapped(true) : setFirstTapped(true)}
                                          onClick={() => {
                                            setSecondTapped(true); 
                                          }}
                >
              {featuredStories.map(mapFeaturedStories)}
            </FeaturedStoryPreviews>
          </HomePageIntroContainerLarge>
        )}
        {!alreadyHovered && !faded && (
          <HomePageIntroContainerSmall>
            <AlleywayEmblem
              src={icons.LARGE_ALLEYWAY_EMBLEM}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0, x: -120, y: -270, scale: 0.4 }}
              transition={{ type: 'spring', duration: 5, delay: 1 }}
            />
            <FeaturedStoryPreviews
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: -420 }}
              transition={{ type: 'spring', duration: 5, delay: 1 }}
              onClick={() => {
                setSecondTapped(true); 
              }}
            >
              {featuredStories.map(mapFeaturedStories)}
            </FeaturedStoryPreviews>
          </HomePageIntroContainerSmall>
        )}
        {alreadyHovered ||
          (faded && isMobile) && (
            <FeaturedStoryPreviews
              alreadyHovered
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'spring', duration: 4 }}
              onClick={() => {
                setSecondTapped(true); 
              }}
              onTap={() => 
                {
                  if (firstTapped && !isMobile) {
                    setSecondTapped(true);
                  }
                  else if (!firstTapped && isMobile) {
                    setSecondTapped(true);
                  }
                  else if (!firstTapped && !isMobile) {
                    setFirstTapped(true);
                  }
                }}
            >
              {featuredStories.map(mapFeaturedStories)}
            </FeaturedStoryPreviews>
          )}
        {alreadyHovered && (
          <FeaturedStoryPreviews alreadyHovered               
          onTap={() => 
            {
              if (firstTapped && !isMobile) {
                setSecondTapped(true);
              }
              else if (!firstTapped && isMobile) {
                setSecondTapped(true);
              }
              else if (!firstTapped && !isMobile) {
                setFirstTapped(true);
              }
            }}
            onClick={() => {
              setSecondTapped(true); 
            }}
            >
            {featuredStories.map(mapFeaturedStories)}
          </FeaturedStoryPreviews>
        )}
        {(alreadyHovered ||
          (faded && isMobile) || firstTapped) && (
          <NewsletterSignUp
            description={newsletterDescription}
            newsletterConfirmationData={newsletterConfirmationData}
            privacyPolicyLinkTitle={privacyPolicyLinkTitle}
            privacyPolicyText={privacyPolicyText}
            title={newsletterSignup}
          />
        )}
      </HomePageContentWrapper>
      {(alreadyHovered ||
          (faded && isMobile) || firstTapped) && <Footer footerData={footerData} />}
    </>
  );
}