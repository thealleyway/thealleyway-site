import React from 'react';
import { icons } from '../../style/icons';
import { getString } from '../../lib/richText';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import H1Styled from '../h1-styled/H1Styled';
import PageDescription from '../page-description/PageDescription';
import AboutFounder from './about-founder/AboutFounder';
import AboutMission from './about-mission/AboutMission';
import AboutValue from './about-value/AboutValue';
import QuoteCarousel from '../quote-carousel/QuoteCarousel';
import {
  HeaderandSquiggleContainer,
  SquiggleUnderline,
} from './AboutPage.style';
import { useSpring } from 'react-spring';
import { header } from '../../style/animations';

export default function AboutPage({
  aboutPageData,
  navigationData,
  boxLinkDataFooter,
  footerData,
  valuesData,
  mainResourcesData,
}) {
  const {
    about_page_title_regular: aboutPageTitleRegular,
    about_page_title_italic: aboutPageTitleItalic,
    about_page_description: aboutPageDescription,
    spark_arrow_description_text: sparkArrowDescriptionText,
    about_page_title_image: aboutPageTitleImage,
    camaryn_title,
    camaryn_text,
    camaryn_image_right,
    camaryn_image_left,
    top_quote,
    camaryns_resources_title,
    camaryns_resources_description,
    more_resources_title,
    more_resources_image,
    spark_arrow_mission_text,
    our_mission_title,
    our_mission_description,
    our_mission_image_left,
    our_mission_image_right,
    spark_arrow_values_text,
    box_link_1,
    values_title,
    values_image,
    spark_arrow_name_text,
    the_alleyway_names_title: theAlleywayNamesTitle,
    the_alleyway_names_description: theAlleywayNamesDescription,
    the_alleyway_names_meaning: theAlleywayNamesMeaning,
    the_alleyway_names_image: theAlleywayNamesImage,
    footer_image: footerImage,
  } = aboutPageData;

  const aboutFounderData = {
    camaryn_title,
    camaryn_text,
    camaryn_image_right,
    camaryn_image_left,
    resource_data: mainResourcesData,
    camaryns_resources_title,
    camaryns_resources_description,
    more_resources_title,
    more_resources_image,
    spark_arrow_mission_text,
    top_quote,
  };

  const missionData = {
    our_mission_title,
    our_mission_description,
    spark_arrow_values_text,
    our_mission_image_left,
    boxLinkData: {
      img: our_mission_image_right,
      data: box_link_1,
    },
  };

  const aboutValueData = {
    values: valuesData,
    values_title,
    values_image,
    spark_arrow_name_text,
  };

  const getQuotes = theAlleywayNamesMeaning.map((m) => {
    return getString(m.meaning);
  });

  const quoteCarouselData = {
    title: theAlleywayNamesTitle,
    description: theAlleywayNamesDescription,
    quotes: getQuotes,
    quoteImage: theAlleywayNamesImage,
  };

  const footerBoxLinkDate = {
    img: footerImage,
    data: boxLinkDataFooter,
  };

  const headerAnimation = useSpring(header);
  const scrollToFounder = 'about-founder';
  const scrollToMission = 'about-mission';
  const scrollToValues = 'about-values';
  const scrollToNames = 'about-names';

  return (
    <>
      <Navigation navigationData={navigationData} />
      <HeaderandSquiggleContainer style={headerAnimation}>
        <H1Styled
          regular={aboutPageTitleRegular}
          italicized={aboutPageTitleItalic}
        />
        <SquiggleUnderline src={icons.SHORT_SQUIGGLE} />
      </HeaderandSquiggleContainer>
      <PageDescription
        description={aboutPageDescription}
        arrowText={sparkArrowDescriptionText}
        img={aboutPageTitleImage}
        scrollTo={scrollToFounder}
      />
      <AboutFounder
        aboutFounderData={aboutFounderData}
        id={scrollToFounder}
        scrollToId={scrollToMission}
      />
      <AboutMission
        missionData={missionData}
        id={scrollToMission}
        scrollToId={scrollToValues}
      />
      <AboutValue
        aboutValueData={aboutValueData}
        id={scrollToValues}
        scrollToId={scrollToNames}
      />
      <QuoteCarousel quoteCarouselData={quoteCarouselData} id={scrollToNames} />
      <Footer footerData={footerData} footerBoxLinkData={footerBoxLinkDate} />
    </>
  );
}
