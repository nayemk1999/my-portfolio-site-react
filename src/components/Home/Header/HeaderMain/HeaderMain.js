import React from "react";
import Typical from "react-typical";
import "./HeaderMain.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";
import { resumeLink } from "../../../Resume/ResumeData";

const HeaderMain = () => {
  return (
    <section className="container headerMain">
      <div className="row align-items-center text-center">
        <div className="col-md-6 col-lg col-xl col col-sm">
          <h4 className="text-center text-uppercase text-shadow">HELLO, MY NAME IS</h4>
          <Typical
            className="text-danger typical"
            steps={["", 500, "NAYEM KHAN", 1000]}
            loop={Infinity}
            wrapper="h1"
          />
          <p className="text-center text-uppercase text-shadow">
            I am a Web Designer/Developer.A HTML,CSS,JavaScript, React & MongoDB
            expert.I always maintain a good relationships with my Team Member.
          </p>
          <div className="social d-flex justify-content-center mt-1">
            <h3 className="pr-3">
              <a href="https://linkedin.com/in/md-nayem-khan-685865192/" rel="noreferrer" target='_blank'>
                <FontAwesomeIcon color="#0e76a8" icon={faLinkedinIn} />
              </a>
            </h3>
            <h3 className="pr-3">
              <a href="https://github.com/nayemk1999" rel="noreferrer" target='_blank'>
                <FontAwesomeIcon color="#000000" icon={faGithubAlt} />
              </a>
            </h3>
          </div>
          <a
            href={resumeLink}
            download
          >
            <button className="btn btn-success btn-custom">
              Download My Resume
            </button>
          </a>

        </div>
        <div className="col-md-6 banner-img d-flex p-3 justify-content-center">
          <img
            className="img-fluid w-75"
            src="https://i2.wp.com/nayemkhan.com/wp-content/uploads/2020/11/My-picture0-ox8zgmumk0jnjuqoczmh1692r810mope5gpdregctw.jpg?fit=370%2C370&ssl=1"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderMain;
