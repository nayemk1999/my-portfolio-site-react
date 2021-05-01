import React from "react";
import NavBar from "../Home/Header/NavBar/NavBar";
import "./Resume.css";
import { projectsData, skillsData } from "./ResumeData";
import ResumeProject from "./ResumeProject";

const Resume = () => {
  return (
    <section>
      <NavBar></NavBar>
      <div className="text-center">
        <a
          href="https://drive.google.com/u/0/uc?id=1ElFdYPB4y_vCnXwPLJ_DOChyPJbxAtlJ&export=download"
          download
        >
          <button className="btn btn-success btn-custom">
            Download My Resume
          </button>
        </a>
      </div>
      <div className="container resume-container p-4 mt-1">
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
          <h1 className=" text-uppercase text-underline highlight-text" >skill</h1>
          <div className="row">
            {skillsData.map((skill) => (
              <div className="col-md-6">
                <ul>
                  <li>{skill.name}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className=" text-uppercase text-underline highlight-text" >work experience</h1>
          <h4 style={{fontFamily: 'Times New Roman'}} className='pl-2'>Projects:</h4>
          <div className="row pl-4 pt-2">
            <div className="col">
              {projectsData.map((project) => (
                <ResumeProject project={project}></ResumeProject>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h1 className=" text-uppercase text-underline highlight-text" >education</h1>
          <div className="row p-4">
            <div className="col">
              
            </div>
          </div>
        </div>
        <div>
          <h1 className=" text-uppercase text-underline highlight-text" >interest</h1>
          <div className="row pl-4 pt-2">
            <div className="col">
              <ul>
                <li>
                  I love to read non-fiction books that help me to be life long
                  learner, I’m also a big fan of Humayun Ahmed (Bangla Novelist)
                </li>
                <li> A big fan of Bill Gates, Mark Zuckerberg.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
