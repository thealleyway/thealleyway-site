import React from "react";

const TextSection = ({ slice }) => {
  return (
    <>
      <h3>Text Section: </h3>
      <p>{slice.primary.text[0].text}</p>
    </>
  );
};

export default TextSection;
