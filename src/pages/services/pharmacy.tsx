import Head from "next/head";
import Link from "next/link";
import React from "react";

function Pharmacy() {
  return (
    <>
      <Head>
        <title>Pharmacy</title>
      </Head>
      <div className="bg-white p-4 flex flex-col md:flex-row gap-12 my-2 rounded-md shadow">
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-5xl">Pharmacy Department</h2>
          <p className="italic">
            —— Delivering quality pharmaceutical care for all
          </p>
          <p>
            The Pharmacy Department at Arawelo Medical is dedicated to providing
            quality pharmaceutical care to our patients. We offer a wide range
            of services, including prescription dispensing, medication
            counseling, and medication management.
          </p>
          <p>
            Our team of experienced pharmacists and pharmacy technicians work
            closely with physicians and other healthcare professionals to ensure
            that our patients receive the most appropriate and effective
            medications for their health conditions.
          </p>
          <p>
            We also provide education and counseling to our patients to help
            them understand their medications and use them safely and
            effectively. Our goal is to help our patients achieve the best
            possible outcomes from their medications.
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <p>
            In addition to our inpatient services, we also operate a retail
            pharmacy where patients can conveniently fill their prescriptions
            and purchase over-the-counter medications and health products.
          </p>
          <p>
            At Arawelo Medical Pharmacy, we are committed to providing
            personalized, patient-centered care. We take the time to get to know
            our patients and understand their health needs, and we strive to
            provide them with the highest level of service.
          </p>
          <p>
            Whether you need a prescription filled, have a question about your
            medication, or need advice on managing your health, our pharmacy
            team is here to help. We look forward to serving your pharmaceutical
            care needs.
          </p>
          <Link href={"/contact"} className="text-purple-600">
            Make an appointment
          </Link>
        </div>
      </div>
    </>
  );
}

export default Pharmacy;
