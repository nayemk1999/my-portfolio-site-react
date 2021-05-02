import React from "react";
import './Project.css'
const Project = (props) => {
  const { name, img1, github, live } = props.project;
  return (
    <div className='col-md-6 mt-2 mb-2'>
      <div className="content card p-3 h-100">
        <a href={live} target='_blank' rel="noreferrer">
          <div className="content-overlay"></div>
          <img className="img-fluid" src={img1} alt='project-pic' />
          <div className="content-details fadeIn-bottom">
            <h5 className="content-title">{name}</h5>
            <div className='d-flex align-items-center justify-content-center project-link'>
              <a href={github} className='p-3 m-1 btn-success' rel="noreferrer" target='_blank'>GitHub</a>
              <a href={live} className='p-3 m-1 btn-success' rel="noreferrer" target='_blank'>Preview</a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
