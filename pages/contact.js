import { getContactPage, getNavigation, getFooter } from '../lib/api';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import ContactConfirmation from '../components/ContactConfirmation';
import { H1, P } from '../style/typography';
import { getString } from '../lib/richText';

export default function ContactPage({
  contactPageData,
  navigationData,
  footerData,
}) {
  const {
    contact_page_title_regular: contactPageTitleRegular,
    contact_page_title_italic: contactPageTitleItalic,
    contact_page_description: contactPageDescription,
    contact_confirmation_title_regular_1,
    contact_confirmation_title_italic_2,
    contact_confirmation_title_regular_3,
    contact_confirmation_description,
  } = contactPageData;

  const contactConfirmationData = {
    contact_confirmation_title_regular_1,
    contact_confirmation_title_italic_2,
    contact_confirmation_title_regular_3,
    contact_confirmation_description,
  };

  return (
    <>
      <Navigation navigationData={navigationData} />
      <H1>{getString(contactPageTitleRegular)}</H1>
      <H1>{getString(contactPageTitleItalic)}</H1>
      <P>{getString(contactPageDescription)}</P>
      <ContactConfirmation contactConfirmationData={contactConfirmationData} />
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
