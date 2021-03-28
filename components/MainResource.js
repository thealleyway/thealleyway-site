import { getString } from "../lib/richText";

export default function MainResource({ mainResourceData }) {

  const {
    resourceTitle,
    resourceLink,
  } = mainResourceData;

  return (
    <>
      {getString(resourceTitle)}
    </>
  );
}