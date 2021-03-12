import React from "react";
import { renderRichText } from "../../lib/richText";

const TextSection = ({ text }) => {
  return (
    <>
      <h3>Text Section: </h3>
      {renderRichText(text)}
    </>
  );
};

export default TextSection;
