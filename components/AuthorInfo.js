import { P } from "../style/typography";
import { getString } from "../lib/richText";

export default function AuthorInfo({ authorInfo }) {

    const {
        additional_information: cameraInfo,
        author_name: authorName, 
        signature,
        author_image: authorImage
    } = authorInfo;

    return (
        <>
            <P>{getString(authorName)}</P>
            <P>{getString(cameraInfo)}</P>
            <img src={signature.url} alt={signature.alt} />
            <a>Signature dimensions: {signature.dimensions.width} x {signature.dimensions.height} </a>
            <br />
            <a>Signature alt: {signature.alt === null ? "null" : signature.alt}</a>
            <br />
            <img src={authorImage.url} alt={authorInfo.alt} />
            <a>Author image dimensions: {authorImage.dimensions.width} x {authorImage.dimensions.height} </a>
            <br />
            <a>Author image alt: {authorImage.alt === null ? "null" : authorImage.alt}</a>
        </>
    )
}
