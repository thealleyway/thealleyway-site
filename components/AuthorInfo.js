import { renderRichText } from "../lib/richText";

export default function AuthorInfo({ authorInfo }) {

    const {
        additional_information: cameraInfo,
        author_name: authorName, 
        signature,
        author_image: authorImage
    } = authorInfo;

    return (
        <>
        {renderRichText(authorName)}
        {renderRichText(cameraInfo)}
        <img src={signature.url} alt="" />
        <a>Signature dimensions: {signature.dimensions.width} x {signature.dimensions.height} </a>
        <br /> <br />
        <img src={authorImage.url} alt="" />
        <a>Author image dimensions: {authorImage.dimensions.width} x {authorImage.dimensions.height} </a>
        </>
    )
}
