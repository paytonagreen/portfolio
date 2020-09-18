import React from "react";
import Head from 'next/head';
import ContactStyles from "./styles/ContactStyles";
import github from "../public/img/PNG/actualgithub.png";
import linkedin from "../public/img/PNG/linkedin.png";
import email from "../public/img/PNG/email.png";


const Contact = () => {
  return (
    <>
    <Head>
      <title>
        Contact | Payton Green
      </title>
    </Head>
    <ContactStyles>
      <div className="contact">
        <img src={email} alt="" /> <p>Write Me!</p>
      </div>
      <div className="contact">
        <img src={github} alt="" /> <p>Code With Me!</p>
      </div>
      <div className="contact">
        <img src={linkedin} alt="" /> <p>Hire Me!</p>
      </div>
    </ContactStyles>
    </>
  );
};

export default Contact;
