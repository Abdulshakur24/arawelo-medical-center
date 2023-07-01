import Image from "next/image";
import React from "react";

type ImageCardType = {
  title: string;
  src: string;
  date: string;
  description: string;
};

function ImageCard({ title, src, date, description }: ImageCardType) {
  return (
    <div className="w-[clamp(320px,100%,350px)] h-[clamp(240px,100vh,240px)]">
      <div
        className={`w-full h-full bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url('/images/${src}')` }}
      />
    </div>
  );
}

export default ImageCard;
