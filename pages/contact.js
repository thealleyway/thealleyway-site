import { renderRichText } from "../lib/richText";
import { getContactPage, getNavigation, getFooter } from "../lib/api";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ContactPage({ contactPageData, navigationData, footerData }) {
  const {
    contact_page_title: contactPageTitle,
    contact_page_description: contactPageDescription,
  } = contactPageData;

  return (
    <>
      <Navigation navigationData={navigationData} />
      {renderRichText(contactPageTitle)}
      {renderRichText(contactPageDescription)}
      <Footer footerData={footerData} />
    </>
  );
}

export async function getStaticProps() {
  const contactPageData = await getContactPage();
  const footerData = await getFooter();
  const navigationData = await getNavigation();

  return {
    props: {
      contactPageData,
      footerData,
      navigationData,
    },
  };
}
