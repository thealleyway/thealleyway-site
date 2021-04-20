import {
  getContactPage,
  getNavigation,
  getFooter,
  getBoxLink,
} from '../lib/api';
import ContactPage from '../components/contactPage/ContactPage';

export default function Contact({
  contactPageData,
  navigationData,
  footerData,
  boxLink1Data,
}) {
  return (
    <ContactPage
      contactPageData={contactPageData}
      boxLinkData={boxLink1Data}
      navigationData={navigationData}
      footerData={footerData}
    />
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
