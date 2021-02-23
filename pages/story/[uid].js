import { client } from "../../prismic-configuration";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";
import SliceZone from "../../components/slices/SliceZone";

export default function Story({ data }) {
  return (
    <article>
      <header>{RichText.asText(data.title)}</header>
      <SliceZone sliceZone={data.body} />
    </article>
  );
}

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at("document.type", "story")
  );

  const paths = results.map((story) => ({
    params: {
      uid: story.uid,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { uid } = params;
  const { data } = await client.getByUID("story", uid);
  return {
    props: { data },
  };
}
