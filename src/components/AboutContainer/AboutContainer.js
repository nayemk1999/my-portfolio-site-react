import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import About from "../Home/About/About";
import Footer from "../Home/Footer/Footer";
import NavBar from "../Home/Header/NavBar/NavBar";

const AboutContainer = () => {
  return (
    <div >
      <NavBar></NavBar>
      <About></About>
      <div className="mt-5 container">
        <h1 className="text-center text-uppercase text-shadow">Contact Me</h1>
        <span className="divider"></span>
        <span className="divider2"></span>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default AboutContainer;
