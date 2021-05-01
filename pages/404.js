import { get404, getNavigation } from '../lib/api';
import FourOhFourPage from '../components/four-oh-four-page/FourOhFourPage';

export default function FourOhFour({ navigationData, errorPageData }) {
  return (
    <FourOhFourPage
      navigationData={navigationData}
      errorPageData={errorPageData}
    />
  );
}

export async function getStaticProps() {
  const errorPageData = await get404();
  const navigationData = await getNavigation();

  return {
    props: {
      navigationData,
      errorPageData,
    },
  };
}
