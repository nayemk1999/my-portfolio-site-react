import React from "react";

const Project = (props) => {
    const { name, img1, github, live} = props.project;
  return (
    <div className='col-md-3'>
      <div className="card p-3" >
        <img className="img-fluid" src={img1} alt="projectImage" />
        <div className="card-body">
          <h6 className="card-text projectName">{name}</h6>
          <div className='d-flex align-items-center justify-content-center project-link'>
              <a href={github} className='p-2 m-1 btn-success rounded' rel="noreferrer" target='_blank'>GitHub</a>
              <a href={live} className='p-2 m-1 btn-success rounded' rel="noreferrer" target='_blank'>Live</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
