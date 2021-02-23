import React from "react";
import TextSection from "./TextSection";
import ImageGallery from "./ImageGallery";

const SliceZone = ({ sliceZone }) => (
  <div>
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case "text":
          return <TextSection slice={slice} key={`slice-${index}`} />;
        case "image_gallery":
          return <ImageGallery slice={slice} key={`slice-${index}`} />;
        default:
          return null;
      }
    })}
  </div>
);

export default SliceZone;
