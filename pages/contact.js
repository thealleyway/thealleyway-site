import { renderRichText } from "../lib/richText";
import { getContactPage } from "../lib/api";

export default function ContactPage({ contactPageData }) {
    const {
        contact_page_title,
        contact_page_description,
    } = contactPageData;

    return <>
    {renderRichText(contact_page_title)}
    {renderRichText(contact_page_description)}
    </>
}

export async function getStaticProps() {
    const contactPageData = await getContactPage();
  
    return {
      props: {
        contactPageData,
      },
    };
  }