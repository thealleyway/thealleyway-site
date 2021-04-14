import { getContactPage, getNavigation, getFooter } from '../lib/api';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import H1Styled from '../components/H1Styled/H1Styled';
import PageDescription from '../components/pageDescription/PageDescription';
import styled from 'styled-components';

const PageContainer = styled.div``;

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
  } = contactPageData;

  return (
    <PageContainer>
      <Navigation navigationData={navigationData} />
      <H1Styled
        regular={contactPageTitleRegular}
        italicized={contactPageTitleItalic}
      />
      <PageDescription
        description={contactPageDescription}
        arrowText="LET'S CONNECT"
        img={contactImageTop.url}
      />
      <Footer footerData={footerData} />
    </PageContainer>
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
