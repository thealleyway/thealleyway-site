import React from "react";
import { renderRichText } from "../../lib/richText";

export default function TextSection({ text }) {
  return (
    <>
      <h3>Text Section: </h3>
      {renderRichText(text)}
    </>
  );
}
