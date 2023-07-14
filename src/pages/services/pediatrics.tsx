import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Pediatrics() {
  return (
    <>
      <Head>
        <title>Pediatrics</title>
      </Head>
      <div className="bg-white p-4 flex flex-col md:flex-row gap-12 my-2 rounded-md shadow">
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-5xl">Pediatrics Department</h2>
          <p className="italic">—— Come in for a yearly examination.</p>
          <p>
            Our pediatrics department is committed to the health and welfare of
            all children. The pediatrics division seeks to offer complete
            medical care to kids of all ages, from newborns to teenagers.
          </p>
          <p>
            Doctors, nurses, and other medical personnel with specialized
            training in the care of children make up the pediatric staff at a
            hospital. They offer a variety of medical services, such as regular
            check-ups, care for illnesses and injuries, and preventive care.
          </p>
          <p>
            The care of kids with complex medical needs, like those with severe
            congenital heart disease, is one of the hospital's pediatrics
            department's main areas of focus. The pediatric staff collaborates
            closely with the families of these children to create a special plan
            of care that will provide them the best results.
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="relative h-full">
            <Image
              className="bg-center"
              fill
              sizes=""
              style={{
                backgroundPosition: "cover",
                objectFit: "cover",
              }}
              src={"/images/Clinic-768x768.png"}
              alt=""
            />
          </div>
          <p>
            The pediatrics division of our hospital is committed to the health
            and welfare of all kids and offers complete medical attention and
            assistance to kids of all ages, from newborns to teenagers. We may
            make sure that kids get the best care possible by focusing on
            medical complexity and receiving assistance from groups like the
            American Academy of Pediatrics.
          </p>

          <Link href={"/contact"} className="text-purple-600">
            Make an appointment
          </Link>
        </div>
      </div>
    </>
  );
}

export default Pediatrics;
