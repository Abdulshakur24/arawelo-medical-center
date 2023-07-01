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
    <div className="w-[clamp(320px,100%,350px)]  bg-white shadow-lg rounded">
      <div
        className={`w-full h-[clamp(240px,100vh,240px)] bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: `url('/images/${src}')`,
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      />
      <div className="px-4 py-2 flex flex-col gap-4">
        <h1 className="font-bold text-xl">{title}</h1>
        <p>By Arawelo &#x2022; {date}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ImageCard;
