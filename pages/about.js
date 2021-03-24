import { renderRichText } from "../lib/richText";
import { getAboutPage, getNavigation, getFooter, getValues } from "../lib/api";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Value from "../components/Value";

export default function AboutPage({ aboutPageData, navigationData, footerData, valuesData }) {
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
  } = aboutPageData;

  return (
    <>
      <Navigation navigationData={navigationData} />
      {renderRichText(aboutPageTitle)}
      {renderRichText(theAlleywayTitle)}
      <img src={theAlleywayImage.url} alt={theAlleywayImage.alt} />
      {renderRichText(theAlleywayText)}
      {renderRichText(camarynTitle)}
      <img src={camarynImage.url} alt={camarynImage.alt} />
      {renderRichText(camarynText)}
      {renderRichText(valuesTitle)}
      {renderRichText(valuesDescription)}
      {
        valuesData.map((v) => (
            <Value key={v.id} valueData={v.data}/>
        ))
      }
      <Footer footerData={footerData} />
    </>
  );
}

export async function getStaticProps() {
  const aboutPageData = await getAboutPage();
  const footerData = await getFooter();
  const navigationData = await getNavigation();
  const valuesData = await getValues();

  return {
    props: {
      aboutPageData,
      footerData,
      navigationData,
      valuesData
    },
  };
}
