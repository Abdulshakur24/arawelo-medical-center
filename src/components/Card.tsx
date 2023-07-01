import Link from "next/link";
import React from "react";

interface CardType {
  title: string;
  description: string;
  link: string;
}

function Card({ title, description, link }: CardType) {
  return (
    <div className="shadow-md rounded-lg bg-white py-2 px-4 sm:p-6 sm:py-4 sm:px-6 flex flex-col gap-2 max-w-[300px]">
      <h1 className="font-bold underline">{title}</h1>
      <p>{description}</p>
      <Link href={link}>Learn More</Link>
    </div>
  );
}

export default Card;
