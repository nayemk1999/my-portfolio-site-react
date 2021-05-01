import React from "react";

const ResumeProject = (props) => {
  const { name, feature, resource, github, live } = props.project;
  return (
    <div>
      <h3 className='text-underline'>{name}</h3>
      <p>
        <strong>Feature:</strong> {feature}
      </p>
      <p>
        <strong>Resource:</strong> {resource}
      </p>
      <p>
        <strong>GitHub Link:</strong> <a href={github} target='_blank'>{github}</a>
      </p>
      <p>
        <strong>Website Link:</strong> <a href={live} target='_blank'>{live}</a> 
      </p>
    </div>
  );
};

export default ResumeProject;
