import { renderRichText } from "../lib/richText";

export default function Footer({ footerData }) {
    console.log(footerData)
    const {
        contact_email: contactEmail,
        contact_information_description: contactInformationDescription,
        contact_title: contactTitle,
        facebook_link: facebookLink,
        instagram_link: instagramLink,
        twitter_link: twitterLink
    } = footerData
    // contactEmail = contactEmail.url 
    // facebookLink = facebookLink.url
    // instagramLink = instagramLink.url
    // twitterLink = twitterLink.url
    return (
        <>
        <br /> <br /> <br />
        <h1>Footer</h1>
        {contactEmail.url}
        {renderRichText(contactInformationDescription)}
        {renderRichText(contactTitle)} 
        {facebookLink.url} <br />
        {instagramLink.url} <br />
        {twitterLink.url} <br />
        </>
    )
};
