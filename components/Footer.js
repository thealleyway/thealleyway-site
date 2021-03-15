import { renderRichText } from "../lib/richText";

export default function Footer({ footerData }) {
    const {
        contact_email: {url: contactEmail},
        contact_information_description: contactInformationDescription,
        contact_title: contactTitle,
        facebook_link: {url: facebookLink},
        instagram_link: {url: instagramLink},
        twitter_link: {url: twitterLink}
    } = footerData

    return (
        <>
        <br /> <br /> <br />
        <h1>Footer</h1>
        {contactEmail}
        {renderRichText(contactInformationDescription)}
        {renderRichText(contactTitle)} 
        {facebookLink} <br />
        {instagramLink} <br />
        {twitterLink} <br />
        </>
    )
};
