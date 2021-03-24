import { getAboutPage, getNavigation, getFooter } from "../lib/api";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { H1, H2, H3, P } from "../style/typography";
import { getString } from "../lib/richText";

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
      <H1>{getString(aboutPageTitle)}</H1>
      <H2>{getString(theAlleywayTitle)}</H2>
      <img src={theAlleywayImage.url} alt={theAlleywayImage.alt} />
      <P>{getString(theAlleywayText)}</P>
      <H2>{getString(camarynTitle)}</H2>
      <img src={camarynImage.url} alt={camarynImage.alt} />
      <P>{getString(camarynText)}</P>
      <H2>{getString(valuesTitle)}</H2>
      <H3>{getString(valuesDescription)}</H3>
      {values.map((v) => (
        <a key={v.value.toString()}>
          <H3>{v.value[0].text}</H3>
          <P>{v.value[1].text}</P>
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
  console.log(aboutPageData.values[0].value)

  return {
    props: {
      aboutPageData,
      footerData,
      navigationData,
    },
  };
}
