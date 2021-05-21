import React from "react";
import NavBar from "../Home/Header/NavBar/NavBar";
import "./Resume.css";
import { projectsData, resumeLink, skillsData } from "./ResumeData";
import ResumeProject from "./ResumeProject";
const Resume = () => {
  return (
    <section>
      <NavBar></NavBar>
      <div className="text-center">
        <a
          href={resumeLink}
          download
        >
          <button className="btn btn-success btn-custom">
            Download My Resume
          </button>
        </a>
      </div>
      <div className="container w-75 resume-container p-4 mt-1">
        <div className="row">
          <div className="col-md-6 ">
            <div className='font-weight-bold'>
              <h3 style={{ fontWeight: 'bold' }} >MD.NAYEM KHAN</h3>
              <h6 style={{ fontWeight: 'bold' }} >Front-End-Developer</h6>
              <h6 style={{ fontWeight: 'bold' }} >Dhaka, Bangladesh</h6>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <div >
              <h6><span style={{ fontWeight: 'bold' }}>Phone:</span> +8801517124727</h6>
              <h6><span style={{ fontWeight: 'bold' }}>Email:</span> nayemk900@gmail.com </h6>
              <h6 style={{ fontWeight: 'bold' }}>
                <a target='_blank' rel="noreferrer" href="https://github.com/nayemk1999">GitHub</a>
                <a className='p-2' target='_blank' rel="noreferrer" href="https://linkedin.com/in/md-nayem-khan-685865192/">LinkedIn</a>
                <a className='p-2' target='_blank' rel="noreferrer" href="https://portfolio-website-nayem.web.app/">Portfolio</a>
              </h6>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center pt-2">
            To obtain Advanced knowledge of Object-Oriented JavaScript, ReactJs framework,
            Bootstrap, Material UI, CSS, semantic HTML, NodeJS, MongoDB, ES 6, Firebase,
            Netlify, Heroku. I am a front-end developer of HTML5, CSS3, JavaScript, ReactJs,
            Bootstrap, Material UI & Back-end-Developer by NodeJS, MongoDB, Firebase,
            Heroku, Netlify.
          </p>
          <span className="resume-divider"></span>
        </div>

        <div>
          <h4 className=" text-uppercase text-underline" >skill</h4>
          <div className="row">
            {skillsData.map((skill) => (
              <div className="col-md-12 mt-0 pt-0">
                <ul>
                  <li ><span style={{ fontWeight: 'bold' }}>{skill.name}</span> {skill.data}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className=" text-uppercase text-underline" >projects</h4>
          <div className="row pl-4 pt-2">
            <div className="col">
              {projectsData.map((project) => (
                <ResumeProject project={project}></ResumeProject>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className=" text-uppercase text-underline " >education</h4>
          <div className="row p-4">
            <div className="col">

            </div>
          </div>
        </div>
        <div>
          <h4 className=" text-uppercase text-underline highlight-text" >interest</h4>
          <div className="row pl-4 pt-2">
            <div className="col">
              <ul>
                <li>
                  <p>I love to read non-fiction books that help me to be life long
                  learner, I’m also a big fan of Humayun Ahmed (Bangla Novelist)
                  </p>
                </li>
                <li><p>A big fan of Bill Gates, Mark Zuckerberg.</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
