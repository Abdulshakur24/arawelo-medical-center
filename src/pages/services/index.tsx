import Head from "next/head";
import React from "react";

function Services() {
  return (
    <>
      <Head>
        <title>Services</title>
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
          <div className="text-start m-4 md:mb-12 md:ml-12 flex flex-col gap-2">
            <h1 className="text-white text-lg sm:text-2xl font-semibold uppercase md:text-3xl flex gap-3 items-center">
              Medical{" "}
              <span className="underline text-purple-400">Services</span>
            </h1>
            <div className="text-white text-md break-words  font-thin w-full max-w-[28rem] flex item-center flex-wrap gap-2 bg-black/40 p-4 rounded-md">
              <p>General Consultation</p>
              <p className="text-purple-300">|</p>
              <p>Emergency Services</p>
              <p className="text-purple-300">|</p>
              <p>General out-patient</p>
              <p className="text-purple-300">|</p>
              <p>Maternity</p>
              <p className="text-purple-300">|</p>
              <p>Pediatrics</p>
              <p className="text-purple-300">|</p>
              <p>Specialty Clinic</p>
              <p className="text-purple-300">|</p>
              <p>ICU/HDU</p>
              <p className="text-purple-300">|</p>
              <p>Theater</p>
              <p className="text-purple-300">|</p>
              <p>General wards</p>
              <p className="text-purple-300">|</p>
              <p>Laboratory Services</p>
              <p className="text-purple-300">|</p>
              <p>Dentistry</p>
              <p className="text-purple-300">|</p>
              <p>Pharmacy</p>
              <p className="text-purple-300">|</p>
              <p>Ambulance Services</p>
              <p className="text-purple-300">|</p>
              <p>Physiotherapy</p>
              <p className="text-purple-300">|</p>
              <p>Occupational Therapy</p>
              <p>In-Patient/Out-Patient </p>
              <p className="text-purple-300">|</p>
              <p>Antenatal Clinic</p> <p className="text-purple-300">|</p>{" "}
              <p>Gynecology</p> <p className="text-purple-300">|</p>
            </div>
          </div>
        </div>
      </div>
      <section
        id="services"
        className="grid gap-2 grid-cols-1 max-w-6xl mx-auto p-4"
      >
        <div className="w-full h-[465px] bg-white p-2 rounded-lg flex items-center">
          <div className="w-full">
            <div className="bg-white/80 min-w-[220px] px-4 py-2 rounded-lg translate-x-[20%] border">
              <h1 className="text-sm sm:text-base font-semibold uppercase md:text-xl">
                General Consultation
              </h1>
              <p>
                General consultation is a discussion and assessment of the
                patient's health issues by a medical practitioner. The
                appropriate course of action for the patient can be decided upon
                through this kind of consultation, which is an essential stage
                in the diagnostic process.
              </p>
              <hr className="w-20 border-[2px] rounded my-2 " />
              <p>
                symptoms <br /> medical history <br /> lifestyle
              </p>
            </div>
          </div>
          <div className="w-full h-full bg-[url('/images/pexels-evg-kowalievska-1170979.jpg')] bg-no-repeat bg-cover bg-center" />
        </div>
        <div className="w-full h-[465px] bg-white p-2 rounded-lg flex items-center flex-row-reverse">
          <div className="w-full">
            <div className="bg-white/80 min-w-[220px]  px-4 py-2 rounded-lg translate-x-[-20%] border">
              <h1 className="text-sm sm:text-base font-semibold uppercase md:text-xl">
                Emergency Services
              </h1>
              <p>
                General consultation is a discussion and assessment of the
                patient's health issues by a medical practitioner. The
                appropriate course of action for the patient can be decided upon
                through this kind of consultation, which is an essential stage
                in the diagnostic process.
              </p>
              <hr className="w-20 border-[2px] rounded my-2 " />
              <p>
                symptoms <br /> medical history <br /> lifestyle
              </p>
            </div>
          </div>
          <div className="w-full h-full bg-[url('/images/pexels-evg-kowalievska-1170979.jpg')] bg-no-repeat bg-cover bg-center" />
        </div>
        <div className="w-full h-[465px] bg-white p-2 rounded-lg flex items-center">
          <div className="w-full">
            <div className="bg-white/80 min-w-[220px] px-4 py-2 rounded-lg translate-x-[20%] border">
              <h1 className="text-sm sm:text-base font-semibold uppercase md:text-xl">
                Maternity
              </h1>
              <p>
                We provide complete care for new moms and their infants ensuring
                both the mother and the child have a secure and healthy
                pregnancy, delivery, and postpartum recovery.
              </p>
              <hr className="w-20 border-[2px] rounded my-2 " />
              <p>
                New Born Unit <br /> Ultrasound service
              </p>
            </div>
          </div>
          <div className="w-full h-full bg-[url('/images/pexels-anna-shvets-3845126.jpg')] bg-no-repeat bg-cover bg-center" />
        </div>
        <div className="w-full h-[465px] bg-white p-2 rounded-lg flex items-center flex-row-reverse">
          <div className="w-full">
            <div className="bg-white/80 min-w-[220px] px-4 py-2 rounded-lg translate-x-[-20%] border">
              <h1 className="text-sm sm:text-base font-semibold uppercase md:text-xl">
                Pediatrics
              </h1>
              <p>
                Our pediatrics department is committed to the health and welfare
                of all children. The pediatrics division seeks to offer complete
                medical care to kids of all ages, from newborns to teenagers.
              </p>
              <hr className="w-20 border-[2px] rounded my-2 " />
            </div>
          </div>
          <div className="w-full h-full bg-[url('/images/viccinted-kid.png')] bg-no-repeat bg-cover bg-center" />
        </div>
      </section>
    </>
  );
}

export default Services;
