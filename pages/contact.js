import { getContactPage, getNavigation, getFooter } from '../lib/api';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import { H1, P } from '../style/typography';
import { getString } from '../lib/richText';

export default function ContactPage({
  contactPageData,
  navigationData,
  footerData,
}) {
  const {
    contact_page_title: contactPageTitle,
    contact_page_description: contactPageDescription,
  } = contactPageData;

  return (
    <>
      <Navigation navigationData={navigationData} />
      <H1>{getString(contactPageTitle)}</H1>
      <P>{getString(contactPageDescription)}</P>
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
