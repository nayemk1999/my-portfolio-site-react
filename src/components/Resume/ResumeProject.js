import React from "react";

const ResumeProject = (props) => {
  const { name, feature, resource, github, live } = props.project;
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <h6 className='text-underline highlight-text'>{name}</h6>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <div>
            <h6>
              <a className='text-underline highlight-text' target='_blank' rel="noreferrer" href={github}>GitHub</a>
              <a className='p-2 text-underline highlight-text' target='_blank' rel="noreferrer" href={live}>Live</a>
            </h6>
          </div>
        </div>
      </div>

      <p>
        <strong>➢ Feature:</strong> {feature}
      </p>
      <p>
        <strong>➢ Technologies:</strong> {resource}
      </p>
     
    </div>
  );
};

export default ResumeProject;
