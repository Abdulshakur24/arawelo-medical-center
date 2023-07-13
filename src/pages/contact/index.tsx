import { useFormik } from "formik";
import * as Yup from "yup";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import AuthLayout from "src/layout/AuthLayout";
import styled from "styled-components";
import GoogleMapComponent from "src/components/GoogleMap";

function Contact() {
  const [isSent, setIsSent] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: () =>
      Yup.object({
        name: Yup.string().required("Required*"),
        email: Yup.string().email("Invalid Email").required("Required*"),
        subject: Yup.string().required("Required*"),
        message: Yup.string().min(5).required("Required*"),
      }),
    onSubmit: async (values) => {
      try {
        setIsSent(() => true);
        formik.resetForm();
        // to be continued...
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="bg-white p-4 flex flex-col gap-6 my-2 rounded-md shadow">
        <h1 className="text-3xl">
          Considering one of our services, or just want say hello? we would love
          to hear from you!
        </h1>
        <hr className="bg-gray-200 h-[2px] border-none" />
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full flex flex-col justify-center items-center md:gap-8">
            <h2>Come Visit Us!</h2>
            <p> Five Star Rd,</p>
            <p>Nairobi, Kenya</p>
            <h3 className="font-bold">Hours</h3>

            <p>Sat – Fri</p>
            <p>24 Hours a Day</p>
          </div>
          <div className="w-full">
            <div className="h-52 mx-auto max-w-[312px] w-full bg-cover bg-no-repeat bg-[url('/images/pexels-evg-kowalievska-1170979.jpg')]" />
            <div className="h-52 mx-auto max-w-[312px] w-full bg-cover bg-no-repeat bg-[url('/images/pexels-daniel-frank-287237-1024x821.jpg')]" />
          </div>
          <div className="w-full">
            <FormWrapper onSubmit={formik.handleSubmit} style={{}}>
              <Form.Input
                type="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={
                  formik.touched.name && Boolean(formik.errors.name) ? (
                    <p>{formik.errors.name}</p>
                  ) : null
                }
              />
              <Form.Input
                type="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={
                  formik.touched.email && Boolean(formik.errors.email) ? (
                    <p>{formik.errors.email}</p>
                  ) : null
                }
              />
              <Form.Input
                type="subject"
                name="subject"
                label="Subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                error={
                  formik.touched.subject && Boolean(formik.errors.subject) ? (
                    <p>{formik.errors.subject}</p>
                  ) : null
                }
              />
              <Form.TextArea
                type="message"
                name="message"
                label="Message"
                value={formik.values.message}
                onChange={formik.handleChange}
                error={
                  formik.touched.message && Boolean(formik.errors.message) ? (
                    <p>{formik.errors.message}</p>
                  ) : null
                }
              />
              <button
                disabled={isSent}
                type="submit"
                className="border rounded px-4 py-2 disabled:cursor-not-allowed"
              >
                {!isSent ? "SEND" : "SENT!"}
              </button>
            </FormWrapper>
          </div>
        </div>
        <GoogleMapComponent />
      </div>
    </>
  );
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  input,
  textarea {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #8c8c8c;
    border-radius: 4px;
  }

  textarea {
    min-height: 60px;
    max-height: 200px;
  }

  p {
    color: #b70000;
  }
`;

export default Contact;
