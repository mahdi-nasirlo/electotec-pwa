import React from "react";
import Image from "next/image";

export default function PdfViewer({ images }) {
  return (
    <>
      <div className="pb-2 mt-auto h-[600px] overflow-y-auto rounded-md">
        {images.map((image) => (
          <Image
            key={image.uuid}
            src={image.path}
            width="100%"
            height="130"
            layout="responsive"
            alt={image.name}
          />
        ))}
      </div>
    </>
  );
}
