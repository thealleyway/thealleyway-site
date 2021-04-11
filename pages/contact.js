import { getContactPage, getNavigation, getFooter } from '../lib/api';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import ContactConfirmation from '../components/contactConfirmation/ContactConfirmation';
import { P } from '../style/typography';
import { getString } from '../lib/richText';
import H1Styled from '../components/H1Styled/H1Styled';
import PageDescription from '../components/pageDescription/PageDescription';

export default function ContactPage({
  contactPageData,
  navigationData,
  footerData,
}) {
  const {
    contact_page_title_regular: contactPageTitleRegular,
    contact_page_title_italic: contactPageTitleItalic,
    contact_page_description: contactPageDescription,
    contact_image_top: contactImageTop,
    contact_image_bottom: contactImageBottom,
    contact_confirmation_title_regular_1,
    contact_confirmation_title_italic_2,
    contact_confirmation_title_regular_3,
    contact_confirmation_description,
    contact_confirmation_image,
  } = contactPageData;

  const contactConfirmationData = {
    contact_confirmation_title_regular_1,
    contact_confirmation_title_italic_2,
    contact_confirmation_title_regular_3,
    contact_confirmation_description,
    contact_confirmation_image,
  };

  return (
    <>
      {/* <Navigation navigationData={navigationData} /> */}
      <H1Styled
        regular={contactPageTitleRegular}
        italicized={contactPageTitleItalic}
      />
      <PageDescription
        description={contactPageDescription}
        arrowText="LET'S CONNECT"
        img={contactImageTop.url}
      />
      {/* <P>{getString(contactPageDescription)}</P>
      <img src={contactImageTop.url} alt={contactImageTop.alt} /> */}
      {/* <img src={contactImageBottom.url} alt={contactImageBottom.alt} /> */}
      {/* <ContactConfirmation contactConfirmationData={contactConfirmationData} />
      <Footer footerData={footerData} /> */}
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
