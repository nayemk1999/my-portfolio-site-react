import React from "react";
import CountUp from "react-countup";
import "./About.css";
const About = () => {
  return (
    <section className="about text-center">
      <div className="container">
        <h1 className="pt-2 text-center text-uppercase text-shadow">
          About Me
        </h1>
        <span className="divider"></span>
        <span className="divider2"></span>
        <div className="row p-5 align-items-center">
          <div className="col-md-6 about-content">
            <h1 className="text-center text-uppercase text-shadow">nayem khan</h1>
            <p>
              Hello, I am a Professional Web Developer , Certified and
              Experienced JavaScript & React Developer | Lead Generation &
              Design Expert. Always – Available.. DESINENCE – BANGLADESH
            </p>
          </div>
          <div className="col-md-6">
            <h1 className=" text-center text-uppercase text-shadow">Completed Projects</h1>
            <h1 className="text-danger rounded text-uppercase text-shadow ">
              <CountUp delay={2} duration={20} end={100} />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
