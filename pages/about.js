import { getAboutPage, getNavigation, getFooter } from "../lib/api";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import H1 from "../components/headers/H1";
import H2 from "../components/headers/H2";
import H3 from "../components/headers/H3";
import Text from "../components/Text";

export default function AboutPage({ aboutPageData, navigationData, footerData }) {
  const {
    about_page_title: aboutPageTitle,
    camaryn_image: camarynImage,
    camaryn_title: camarynTitle,
    camaryn_text: camarynText,
    the_alleyway_image: theAlleywayImage,
    the_alleyway_text: theAlleywayText,
    the_alleyway_title: theAlleywayTitle,
    values_title: valuesTitle,
    values_description: valuesDescription,
    values,
  } = aboutPageData;

  return (
    <>
      <Navigation navigationData={navigationData} />
      <H1 h1Data={aboutPageTitle} />
      <H2 h2Data={theAlleywayTitle} />
      <img src={theAlleywayImage.url} alt={theAlleywayImage.alt} />
      <Text textData={theAlleywayText} />
      <H2 h2Data={camarynTitle} />
      <img src={camarynImage.url} alt={camarynImage.alt} />
      <Text textData={camarynText} />
      <H3 h3Data={valuesTitle} />
      <H3 h3Data={valuesDescription} />
      {values.map((v) => (
        <a key={v.value.toString()}>
          <H3 h3Data={v.value} />
        </a>
      ))}
      <Footer footerData={footerData} />
    </>
  );
}

export async function getStaticProps() {
  const aboutPageData = await getAboutPage();
  const footerData = await getFooter();
  const navigationData = await getNavigation();

  return {
    props: {
      aboutPageData,
      footerData,
      navigationData,
    },
  };
}
