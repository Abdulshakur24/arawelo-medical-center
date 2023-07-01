import Head from "next/head";
import React from "react";
import ImageCard from "src/components/ImageCard";

function Blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="w-full min-h-screen  bg-gray-50 flex flex-col gap-2">
        <div className="h-14 bg-gradient-to-r from-purple-500 to-fuchsia-500 flex items-center rounded-lg">
          <h1 className="ml-4 font-semibold text-4xl text-white">Blog</h1>
        </div>
        <div className="shadow-lg rounded-lg">
          <ImageCard
            title="The Crucial Role of Vaccines in Protecting Children From Serious Illnesses"
            src="pexels-anna-shvets-3845759.jpg"
            description="Vaccines are essential to children's health and well-being. Vaccines play an important role in preventing illnesses such as measles, mumps, diphtheria, whooping cough, and other diseases."
            date="January 27, 2023"
          />
        </div>
      </div>
    </>
  );
}

export default Blog;
