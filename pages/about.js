import {
  getAboutPage,
  getNavigation,
  getFooter,
  getValues,
  getMainResources,
  getBoxLink,
} from '../lib/api';
import AboutPage from '../components/about-page/AboutPage';

export default function About({
  aboutPageData,
  navigationData,
  boxLinkDataFooter,
  footerData,
  valuesData,
  mainResourcesData,
}) {
  return (
    <AboutPage
      navigationData={navigationData}
      aboutPageData={aboutPageData}
      boxLinkDataFooter={boxLinkDataFooter}
      valuesData={valuesData}
      mainResourcesData={mainResourcesData}
      footerData={footerData}
    />
  );
}

export async function getStaticProps() {
  const aboutPageData = await getAboutPage();
  const footerData = await getFooter();
  const navigationData = await getNavigation();
  const valuesData = await getValues();
  const mainResourceIds = aboutPageData.main_resources.map(
    (item) => item.resource.id,
  );
  const mainResourcesData = await getMainResources(mainResourceIds);
  const boxLinkDataFooter = await getBoxLink(aboutPageData.box_link_footer.id);
  const boxLink1Data = await getBoxLink(aboutPageData.box_link_1.id);

  return {
    props: {
      aboutPageData: {
        ...aboutPageData,
        box_link_1: boxLink1Data,
      },
      boxLinkDataFooter,
      footerData,
      navigationData,
      valuesData,
      mainResourcesData,
    },
  };
}
