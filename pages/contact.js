import { getContactPage, getNavigation } from '../lib/api';
import Navigation from '../components/navigation/Navigation';
import H1Styled from '../components/H1Styled/H1Styled';
import PageDescription from '../components/pageDescription/PageDescription';

export default function ContactPage({ contactPageData, navigationData }) {
  const {
    contact_page_title_regular: contactPageTitleRegular,
    contact_page_title_italic: contactPageTitleItalic,
    contact_page_description: contactPageDescription,
    contact_image_top: contactImageTop,
  } = contactPageData;

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
        img={contactImageTop}
      />
    </>
  );
}

export async function getStaticProps() {
  const contactPageData = await getContactPage();
  const navigationData = await getNavigation();

  return {
    props: {
      contactPageData,
      navigationData,
    },
  };
}
