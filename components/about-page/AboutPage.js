import React from 'react';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import H1Styled from '../h1-styled/H1Styled';
import PageDescription from '../page-description/PageDescription';
import AboutFounder from './about-founder/AboutFounder';
// import AboutValue from './value/AboutValue';
import {
  HeaderandSquiggleContainer,
  SquiggleUnderline,
} from './AboutPage.style';
import { icons } from '../../style/icons';

export default function AboutPage({
  aboutPageData,
  navigationData,
  boxLinkDataFooter,
  footerData,
  valuesData,
  mainResourcesData,
}) {
  const {
    // HEADER
    about_page_title_regular: aboutPageTitleRegular,
    about_page_title_italic: aboutPageTitleItalic,
    about_page_description: aboutPageDescription,
    spark_arrow_description_text: sparkArrowDescriptionText,
    about_page_title_image: aboutPageTitleImage,

    // CAMARYN
    camaryn_title,
    camaryn_text,
    camaryn_image_right,
    camaryn_image_left,
    top_quote,

    // RESOURCES
    camaryns_resources_title,
    camaryns_resources_description,
    more_resources_title,
    more_resources,
    spark_arrow_mission_text,

    // MISSION
    // our_mission_title: ourMissionTitle,
    // our_mission_description: ourMissionDescription,
    // spark_arrow_values_text: sparkArrowValuesText,
    // TODO: NEED a top box link

    // VALUES
    // values_title: valuesTitle,
    // values_description: valuesDescription,
    // spark_arrow_name_text: sparkArrowNameText,

    // bottom_quote: bottomQuote,

    // spark_arrow_alleyway_text: sparkArrowAlleywayText, // is this used?

    // name meaning
    // the_alleyway_names_title: theAlleywayNamesTitle,
    // the_alleyway_names_meaning: theAlleywayNamesMeaning,

    // FOOTER
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
    more_resources,
    spark_arrow_mission_text,
    top_quote,
  };

  const footerBoxLinkDate = {
    img: footerImage,
    data: boxLinkDataFooter,
  };

  return (
    <>
      <Navigation navigationData={navigationData} />
      <HeaderandSquiggleContainer>
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
      />
      <AboutFounder aboutFounderData={aboutFounderData} />
      {/* {valuesData.map((v) => (
        <AboutValue key={v.id} valueData={v.data} />
      ))} */}
      {/* 
      <H2>{getString(camarynTitle)}</H2>
      <img src={camarynImage.url} alt={camarynImage.alt} />
      <P>{getString(camarynText)}</P>
      <H3>{getString(camarynsResourcesTitle)}</H3>
      <P>{getString(camarynsResourcesDescription)}</P>
      <H3>{getString(moreResourcesTitle)}</H3>
      <P>{getString(topQuote)}</P>
      <H2>{getString(theAlleywayTitle)}</H2>
      <img src={theAlleywayImage.url} alt={theAlleywayImage.alt} />
      <P>{getString(theAlleywayText)}</P>
      <H3>{getString(ourMissionTitle)}</H3>
      <P>{getString(ourMissionDescription)}</P>
      <H2>{getString(valuesTitle)}</H2>
      <H3>{getString(valuesDescription)}</H3>
      
      <H3>{getString(theAlleywayNamesTitle)}</H3>
      {theAlleywayNamesMeaning.map((m) => (
        <P key={m.id}>{getString(m.meaning)}</P>
      ))}
      
      <br />
      {moreResources.map((r) => (
        <P key={r.id}>{r.resource.url}</P>
      ))}
      <P>{getString(bottomQuote)}</P>
      <P>{getString(sparkArrowDescriptionText)}</P>
      <P>{getString(sparkArrowMissionText)}</P>
      <P>{getString(sparkArrowValuesText)}</P>
      <P>{getString(sparkArrowNameText)}</P>
      <P>{getString(sparkArrowAlleywayText)}</P> */}
      <Footer footerData={footerData} footerBoxLinkData={footerBoxLinkDate} />
    </>
  );
}
