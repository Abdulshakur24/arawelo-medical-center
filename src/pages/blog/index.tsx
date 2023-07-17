import Head from "next/head";
import React from "react";
import ImageCard from "src/components/ImageCard";

function Blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="w-full flex flex-col gap-4 mb-4">
        <div className="h-14 bg-gradient-to-r from-purple-500 to-fuchsia-500 flex items-center">
          <h1 className="ml-4 font-semibold text-4xl text-white">Blog</h1>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <ImageCard
            title="The Crucial Role of Vaccines in Protecting Children From Serious Illnesses"
            src="viccinted-kid.png"
            description="Vaccines are essential to children's health and well-being. Vaccines play an important role in preventing illnesses such as measles, mumps, diphtheria, whooping cough, and other diseases."
            date="January 27, 2023"
          />
          <ImageCard
            title="Pediatric Clinic"
            src="Clinic-768x768.png"
            description="The General Pediatrics Program at Arewelo seeks to provide the best in patient care for children and families, which is especially important for those with higher risk for poor health outcomes. We provide comprehensive, family-based, coordinated care that is tailored to meet the needs of each individual patient. Our highly knowledgeable and experienced medical staff…"
            date="December 7, 2022"
          />
          <ImageCard
            title="The Best Dental Clinics in Nairobi 2022"
            src="pexels-anna-shvets-3845759.jpg"
            description="Dental health is important for everyone."
            date="November 6, 2022"
          />
          <ImageCard
            title="The Crucial Role of Vaccines in Protecting Children From Serious Illnesses"
            src="pexels-anna-shvets-3845126.jpg"
            description="Nairobi is a large city with a population of over three million people. As you can imagine, with that many people living in such a dense area, emergencies are bound to happen. When you need emergency care services in South C, Nairobi, it’s important to know which hospitals and clinics are the best equipped to handle your situation."
            date="July 26, 2022"
          />
        </div>
      </div>
    </>
  );
}

export default Blog;
