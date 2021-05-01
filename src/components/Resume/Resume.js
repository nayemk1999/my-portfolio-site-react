import React from "react";
import NavBar from "../Home/Header/NavBar/NavBar";
import "./Resume.css";
import { projectsData } from "./ResumeData";
import ResumeProject from "./ResumeProject";

const Resume = () => {
  return (
    <section>
      <NavBar></NavBar>
      <div className='text-center'>
        <a
          href="https://drive.google.com/u/0/uc?id=1ElFdYPB4y_vCnXwPLJ_DOChyPJbxAtlJ&export=download"
          download
        >
          <button className="btn btn-success btn-custom">
            Download My Resume
          </button>
        </a>
      </div>
      <div className="container resume-container p-4">
        <div>
          <h3>MD.NAYEM KHAN</h3>
          <h6>
            <span>Phone:</span> +8801517124727
          </h6>
          <h6>
            <span>Email:</span> nayemk900@gmail.com
          </h6>
          <h6>
            <span>GitHub:</span> github.com/nayemk1999
          </h6>
          <h6>
            <span>LinkedIn:</span> linkedin.com/in/md-nayem-khan-685865192/
          </h6>
          <h6>
            <span>Website:</span> nayemkhan.com
          </h6>
          <p className="text-center pt-5">
            To obtain the learning of Interactive JavaScript & react Developer
            with Programming Hero. Advanced knowledge of Object-Oriented
            JavaScript, React, modern JS libraries, NodeJS, CSS, semantic HTML,
            MongoDB, ES 6, and Responsive site. I am a front-end-developer &
            Back-end-Developer by NodeJS, React & Modern JavaScript.
          </p>
          <span className="resume-divider"></span>
        </div>

        <div>
          <h1 className=" text-uppercase">skill</h1>

          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>HTML, HTML-5, CSS, SCSS</li>
                <li>JavaScript, Typescript</li>
                <li>React, React Native</li>
                <li>NodeJS</li>
                <li>Bootstrap, Material UI</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>MongoDB</li>
                <li>Heroku, Netify</li>
                <li>Firebase, GitHub</li>
                <li>React Redux</li>
                <li>Web API</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h1 className=" text-uppercase">work experience</h1>
          <h4>Projects</h4>
          <div className="row">
            <div className="col">
              {projectsData.map((project) => (
                <ResumeProject project={project}></ResumeProject>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
