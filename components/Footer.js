import { renderRichText } from "../lib/richText";

export default function Footer({ footerData }) {
    const {
        contact_email: {url: contactEmail},
        contact_information_description: contactInformationDescription,
        contact_title: contactTitle,
        instagram_link: {url: instagramLink},
        tiktok_link: {url: tiktokLink},
    } = footerData;

    return (
        <>
            <br /> <br /> <br />
            <h1>Footer</h1>
            {renderRichText(contactInformationDescription)}
            {contactEmail}
            {renderRichText(contactTitle)} 
            {instagramLink} <br />
            {tiktokLink} <br />
        </>
    );
}
