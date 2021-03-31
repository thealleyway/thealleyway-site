import { H2, H3, P } from "../../style/typography";
import { getString } from "../../lib/richText";
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
            <H2>Footer</H2>
            <P>{getString(contactInformationDescription)}</P>
            <P>{contactEmail}</P>
            <H3>{getString(contactTitle)}</H3>
            <P>{instagramLink}</P> <br />
            <P>{tiktokLink}</P>
        </>
    );
}
