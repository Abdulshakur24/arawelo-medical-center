import Head from "next/head";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className="bg-white p-4 flex flex-col md:flex-row gap-12 my-2 rounded-md shadow">
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-5xl">Arawelo Medical</h2>
          <p>—— The Best Hospital in Nairobi</p>
          <p>
            Arawelo Medical Center Limited is a duly registered privately owned
            company with expertise in the fields of Healthcare delivery systems
            and pharmaceuticals. The people who make up the team at Arawelo
            Medical Center Limited embody our values of strength, performance
            and passion.
          </p>
          <p>
            Our employees have strong connections to these ideals, which have
            contributed significantly to the progressive growth, success and
            leadership of our company. They have helped us develop the
            solutions, systems and project methods required to bring innovation,
            quality and value to the services we deliver for our clients.
          </p>
          <Link href={"/contact"} className="text-purple-600">
            Contact Us
          </Link>
        </div>
        <div className="w-full flex flex-col gap-4 italic">
          <p>
            Arawelo Medical Center Limited is a full-fledged Healthcare facility
            classified as Level 3B hospital – under Kenya Gazette legal notice
            No. 3, 2017 of the Kenya Medical Practitioners and Dentists Council
            Act No 253. The facility is licensed to serve both Out-patients and
            In-patients regardless of race, greed, religious affiliations or
            nationality and more importantly dedicated to serving the general
            community. We have the right tools and qualified manpower to handle
            all types of healthcare services at affordable and competitive rates
            dedicated to serving the General community. We have the right tools
            and the right people to handle all areas of human healthcare
            delivery services; And we do provide quality healthcare services at
            World Health Organization practices and standards.
          </p>
          <p>
            From humble beginnings in 2019, we endeavor to grow into a leading
            healthcare provider within the precincts of South C and the
            sprawling populations both in Nairobi City and other neighboring
            Counties for the benefit all humanity.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
