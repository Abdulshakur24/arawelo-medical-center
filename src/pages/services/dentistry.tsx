import Head from "next/head";
import Link from "next/link";
import React from "react";

function Dentistry() {
  return (
    <>
      <Head>
        <title>Dentistry</title>
      </Head>
      <div className="h-14 bg-gradient-to-r from-purple-500 to-fuchsia-500 flex items-center">
        <h1 className="ml-4 font-semibold text-4xl text-white">Dentistry</h1>
      </div>
      <div className="bg-white p-4 flex flex-col md:flex-row gap-12 m-4 rounded-md shadow">
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-5xl">Dentistry Department</h2>
          <p className="italic">—— Comprehensive dental care for all ages</p>
          <p>
            At Arawelo Medical, our Dentistry Department provides comprehensive
            dental care for patients of all ages. We are committed to helping
            our patients maintain optimal oral health and achieve beautiful
            smiles.
          </p>
          <p>
            Our services include routine dental checkups, cleanings, fillings,
            root canal treatments, extractions, and more. We also offer cosmetic
            dentistry services such as teeth whitening, veneers, and
            orthodontics.
          </p>
          <p>
            Our team of experienced dentists and dental hygienists use the
            latest techniques and technologies to provide our patients with the
            highest quality of care. We strive to create a comfortable and
            friendly environment for our patients.
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <p>
            In addition to providing dental care, we also focus on patient
            education. We believe that by educating our patients about oral
            health, we can help them make informed decisions about their dental
            care and prevent dental problems before they start.
          </p>
          <p>
            Whether you need a routine dental checkup or a more complex dental
            procedure, you can trust the Dentistry Department at Arawelo Medical
            to provide you with the care you need. We are dedicated to helping
            our patients achieve and maintain healthy smiles.
          </p>
          <p>
            If you have any questions about our dental services or would like to
            schedule an appointment, please don't hesitate to contact us. We
            look forward to serving you and your family's dental needs.
          </p>
          <Link href={"/contact"} className="text-purple-600">
            Make an appointment
          </Link>
        </div>
      </div>
    </>
  );
}

export default Dentistry;
