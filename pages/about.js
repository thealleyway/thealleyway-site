import {
  getAboutPage,
  getNavigation,
  getFooter,
  getValues,
  getMainResources,
} from '../lib/api';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import { H1, H2, H3, P, H1Regular } from '../style/typography';
import { getString } from '../lib/richText';
import Value from '../components/value/Value';
import MainResource from '../components/mainResource/MainResource';

export default function AboutPage({
  aboutPageData,
  navigationData,
  footerData,
  valuesData,
  mainResourcesData,
}) {
  const {
    about_page_title: aboutPageTitle,
    about_page_description: aboutPageDescription,
    camaryn_image: camarynImage,
    camaryn_title: camarynTitle,
    camaryn_text: camarynText,
    the_alleyway_image: theAlleywayImage,
    the_alleyway_text: theAlleywayText,
    the_alleyway_title: theAlleywayTitle,
    the_alleyway_names_title: theAlleywayNamesTitle,
    the_alleyway_names_meaning: theAlleywayNamesMeaning,
    our_mission_title: ourMissionTitle,
    our_mission_description: ourMissionDescription,
    values_title: valuesTitle,
    values_description: valuesDescription,
    camaryns_resources_title: camarynsResourcesTitle,
    camaryns_resources_description: camarynsResourcesDescription,
    more_resources_title: moreResourcesTitle,
    more_resources: moreResources,
    top_quote: topQuote,
    bottom_quote: bottomQuote,
  } = aboutPageData;

  return (
    <>
      <Navigation navigationData={navigationData} />
      <H1Regular>{getString(aboutPageTitle)}</H1Regular>
      <H1>us</H1>
      <P>{getString(aboutPageDescription)}</P>
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
      {valuesData.map((v) => (
        <Value key={v.id} valueData={v.data} />
      ))}
      <H3>{getString(theAlleywayNamesTitle)}</H3>
      {theAlleywayNamesMeaning.map((m) => (
        <P key={m.id}>{getString(m.meaning)}</P>
      ))}
      {mainResourcesData.map((r) => (
        <MainResource key={r.id} mainResourceData={r} />
      ))}
      <br />
      {moreResources.map((r) => (
        <P key={r.id}>{r.resource.url}</P>
      ))}
      <P>{getString(bottomQuote)}</P>
      <Footer footerData={footerData} />
    </>
  );
}

export async function getStaticProps() {
  const aboutPageData = await getAboutPage();
  const footerData = await getFooter();
  const navigationData = await getNavigation();
  const valuesData = await getValues();
  const mainResourceIds = aboutPageData.main_resources.map(
    (item) => item.resource.id,
  );
  const mainResourcesData = await getMainResources(mainResourceIds);

  return {
    props: {
      aboutPageData,
      footerData,
      navigationData,
      valuesData,
      mainResourcesData,
    },
  };
}
