import Link from "next/link";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { client } from "../prismic-configuration";

export default function Home(props) {
  return (
    <>
      <h1>{RichText.asText(props.home.data.headline)}</h1>
      {props.stories.results.map((story) => (
        <Link href="story/[id]" as={`/story/${story.uid}`} key={story.uid}>
          <a>{RichText.render(story.data.title)}</a>
        </Link>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const home = await client.getSingle("home_page");
  const stories = await client.query(
    Prismic.Predicates.at("document.type", "story")
  );

  return {
    props: {
      home,
      stories,
    },
  };
}
