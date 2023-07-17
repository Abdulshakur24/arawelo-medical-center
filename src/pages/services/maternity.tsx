import Head from "next/head";
import Link from "next/link";
import React from "react";

function Maternity() {
  return (
    <>
      <Head>
        <title>Maternity</title>
      </Head>
      <div className="h-14 bg-gradient-to-r from-purple-500 to-fuchsia-500 flex items-center">
        <h1 className="ml-4 font-semibold text-4xl text-white">Maternity</h1>
      </div>
      <div className="bg-white p-4 flex flex-col md:flex-row gap-12 m-4 rounded-md shadow">
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-5xl">Maternity Department</h2>
          <p className="italic">
            —— A complete care to new mothers and their babies
          </p>
          <p>
            We provide complete care for new moms and their infants at Arawelo
            Medical. ensuring both the mother and the child have a secure and
            healthy pregnancy, delivery, and postpartum recovery.
          </p>
          <p>
            Mothers can receive prenatal care during the pregnancy, such as
            routine checkups, ultrasounds, and prenatal tests. Throughout the
            pregnancy, our maternity staff will keep an eye on the mother's
            health and the growth of the unborn child while also providing
            information and support.
          </p>
          <p>
            When it's time to give birth, the mother will be admitted to one of
            our hospitals where a team of obstetricians, midwives, and nurses
            will care for her. To protect the mother's and the child's health
            and safety, the delivery process will be constantly watched.
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <p>
            To support expectant moms and their families, we also provide a
            variety of comforts and services. Access to private rooms, meal
            services, lactation consultants, childbirth educators, and other
            experts are all included in this.
          </p>
          <p>
            Expectant women should be aware that our hospital has a reputable
            maternity unit that offers top-notch support and treatment. Mothers
            can guarantee a risk-free pregnancy and delivery by cooperating
            closely with our maternity professionals and heeding their advice.
          </p>
          <p>
            The maternity unit at our hospital offers comprehensive treatment
            for pregnant mothers and new babies, assuring a risk-free pregnancy,
            a healthy birth, and a speedy postpartum recovery. Expectant moms
            can get the greatest care and support they need to bring their new
            baby into the world with a variety of medical services and
            amenities.
          </p>
          <Link href={"/contact"} className="text-purple-600">
            Make an appointment
          </Link>
        </div>
      </div>
    </>
  );
}

export default Maternity;
