import Head from "next/head";
import Link from "next/link";
import React from "react";
import Card from "src/components/Card";
import GoogleMapComponent from "src/components/GoogleMap";
import ArrowIcon from "src/icons/ArrowIcon";

function Dashboard() {
  return (
    <>
      <Head>
        <title>Arawelo Medical Center</title>
      </Head>
      <div
        className="w-full bg-cover bg-center"
        style={{
          height: "100vh",
          maxHeight: "824px",
          backgroundImage: "url('/images/Arawelo-scaled.jpg')",
        }}
      >
        <div className="flex items-end justify-start h-full w-full bg-gray-900 bg-opacity-30">
          <div className="text-start m-4 md:mb-12 md:ml-12 flex flex-col gap-2 bg-black/40 p-4 rounded-md">
            <h1 className="text-white text-lg sm:text-2xl font-semibold uppercase md:text-3xl flex flex-col">
              A True Devotion To{" "}
              <span className="underline text-purple-400">Healing</span>
            </h1>
            <p className="text-white text-xs break-words  font-semibold w-full max-w-[28rem]">
              We offer you one of the best medical treatment in Nairobi. we
              offer everything from emergency rooms to a maternity wards.
            </p>
            <div className="flex sm:items-center sm:gap-4 flex-col sm:flex-row">
              <Link
                href={"/contact"}
                className="text-xs w-max mt-4 transition-all px-4 py-2 bg-purple-600 text-white sm:text-sm uppercase font-medium rounded hover:bg-purple-500 focus:outline-none focus:bg-purple-500"
              >
                Book An Appointment
              </Link>
              <Link
                href={"/services"}
                className="flex text-xs sm:text-sm items-center justify-end transition-all mt-4 text-white hover:text-gray-200"
              >
                <p>More details</p>
                <ArrowIcon className="min-w-[24] sm:min-w-[32px]  w-8 h-8 transition-all fill-white hover:fill-gray-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section id="department" className="m-4">
        <h1 className="font-medium text-3xl mb-4">Department</h1>
        <div className="flex gap-6 flex-wrap justify-center sm:justify-start">
          <Card
            title="General Consultation"
            description="General consultation is a discussion and assessment of the patient's health issues by a medical practitioner."
            link=""
          />
          <Card
            title="Maternity"
            description="Our department offers complete care to new mothers and their babies."
            link="/services/maternity"
          />
          <Card
            title="Pediatrics"
            description="Our department is dedicated to the health and well-being of all children."
            link="/services/pediatrics"
          />
          <Card
            title="Dentisry"
            description="our department provides comprehensive dental care for patients of all ages."
            link="/services/dentistry"
          />
          <Card
            title="Pharmacy"
            description="We ensures that patients receive the right medications, in the right doses, at the right time."
            link="/services/pharmacy"
          />
        </div>
      </section>
      <section id="map">
        <GoogleMapComponent />
      </section>
    </>
  );
}

export default Dashboard;
