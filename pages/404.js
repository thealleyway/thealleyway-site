import Link from 'next/link';
import { get404 } from '../lib/api';
import { H1, P } from '../style/typography';
import { getString } from '../lib/richText';

export default function FourOhFour(errorPageData) {
  const {
    error_page_title: errorPageTitle,
    error_text: errorText,
  } = errorPageData.errorPageData;

  return (
    <>
      <H1>{getString(errorPageTitle)}</H1>
      <P>{getString(errorText)}</P>
      <Link href="/">
        <P>Click here to redirect to home page!</P>
      </Link>
    </>
  );
}

export async function getStaticProps() {
  const errorPageData = await get404();

  return {
    props: {
      errorPageData,
    },
  };
}
