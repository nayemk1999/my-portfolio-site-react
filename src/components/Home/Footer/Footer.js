import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row p-2 align-items-center">
          <div className="col-md-6 col-sm">
            <h5>All Rights Reserved By NAYEM KHAN</h5>
          </div>
          <div className="col-md-6 col-sm">
            <div className="social d-flex justify-content-end">
              <h3 className="pr-2">
                <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/nayemk1999" rel="noreferrer" target="_blank">
                  <FontAwesomeIcon color="#3b5998" icon={faFacebook} />
                </a>
              </h3>
              <h3 className="pr-2">
                <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/md-nayem-khan-685865192/" rel="noreferrer" target='_blank'>
                  <FontAwesomeIcon color="#0e76a8" icon={faLinkedinIn} />
                </a>
              </h3>
              <h3 className="pr-2">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/nayemk1999" rel="noreferrer" target='_blank'>
                  <FontAwesomeIcon color="#4078c0" icon={faGithubAlt} />
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
