import Head from "next/head";
import React from "react";

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className="w-full min-h-screen p-4 bg-gray-50 bg-[url('/image/Arawelo-scaled.jpg')]">
        {/* <Image
          src="/images/Arawelo-scaled.jpg"
          alt=""
          width={500} // Desired size
          height={300}
        /> */}
      </div>
    </>
  );
}

export default About;
