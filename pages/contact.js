import {
  getContactPage,
  getNavigation,
  getFooter,
  getBoxLink,
} from '../lib/api';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import ContactPage from '../components/contactPage/ContactPage';

export default function Contact({
  contactPageData,
  navigationData,
  footerData,
  boxLink1Data,
}) {
  return (
    <>
      <Navigation navigationData={navigationData} />
      <ContactPage
        contactPageData={contactPageData}
        boxLinkData={boxLink1Data}
      />
      <Footer footerData={footerData} />
    </>
  );
}

export async function getStaticProps() {
  const contactPageData = await getContactPage();
  const boxLink1Data = await getBoxLink(contactPageData.box_link_1.id);
  const footerData = await getFooter();
  const navigationData = await getNavigation();
  return {
    props: {
      contactPageData,
      navigationData,
      boxLink1Data,
      footerData,
    },
  };
}
