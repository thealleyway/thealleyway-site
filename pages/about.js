import { renderRichText } from "../lib/richText";
import { getAboutPage } from "../lib/api";

export default function AboutPage({ aboutPageData }) {
  const {
    about_page_title,
    camaryn_image,
    camaryn_title,
    camaryn_text,
    the_alleyway_image,
    the_alleyway_text,
    the_alleyway_title,
  } = aboutPageData;
  return (
    <>
      {renderRichText(about_page_title)}
      {renderRichText(camaryn_title)}
      {renderRichText(camaryn_text)}
      {renderRichText(the_alleyway_text)}
      {renderRichText(the_alleyway_title)}
      <img src={camaryn_image.url} alt={camaryn_image.alt} />
    </>
  );
}

export async function getStaticProps() {
  const aboutPageData = await getAboutPage();

  return {
    props: {
      aboutPageData,
    },
  };
}
