import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import About from "../Home/About/About";
import NavBar from "../Home/Header/NavBar/NavBar";

const AboutContainer = () => {
  return (
    <div className="container">
      <NavBar></NavBar>
      <About></About>
      <div className="mt-5">
        <h1 className="text-center text-uppercase text-shadow">Contact Me</h1>
        <span className="divider"></span>
        <span className="divider2"></span>
        <ContactForm />
      </div>
    </div>
  );
};

export default AboutContainer;
