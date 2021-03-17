import Link from 'next/link'
import { renderRichText } from "../lib/richText";
import { get404 } from "../lib/api";

export default function FourOhFour(errorPageData) {
    const {
        error_page_title: errorPageTitle,
        error_text: errorText, 
        home_page: homePage, 
      } = errorPageData.errorPageData;

  return (
    <>
        <h1>{renderRichText(errorPageTitle)}</h1>
        <a>
            {renderRichText(errorText)}
            <a>Home page ID is: {homePage.id}<br/><br/></a>
        </a>
        <Link href="/">
            <a>Click here to redirect to home page!</a>
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
  

