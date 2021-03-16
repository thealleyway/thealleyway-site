import { renderRichText } from "../lib/richText";
import { getContactPage } from "../lib/api";

export default function ContactPage({ contactPageData }) {
    const {
        contact_page_title: contactPageTitle,
        contact_page_description: contactPageDescription,
    } = contactPageData;

    return (<>
    {renderRichText(contactPageTitle)}
    {renderRichText(contactPageDescription)}
    </>)
}

export async function getStaticProps() {
    const contactPageData = await getContactPage();
  
    return {
      props: {
        contactPageData,
      },
    };
  }