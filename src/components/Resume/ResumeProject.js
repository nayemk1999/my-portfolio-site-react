import React from "react";

const ResumeProject = (props) => {
  const { name, feature, resource, github, live } = props.project;
  return (
    <div>
      <h4 className='text-underline' style={{fontFamily:'verdana', fontWeight:'bold'}} >{name}</h4>
      <p>
        <strong>➢ Feature:</strong> {feature}
      </p>
      <p>
        <strong>➢ Technologies:</strong> {resource}
      </p>
      <p>
        <strong>➢ GitHub Link:</strong> <a rel="noreferrer" href={github} target='_blank'>{github}</a>
      </p>
      <p>
        <strong>➢ Website Link:</strong> <a rel="noreferrer" href={live} target='_blank'>{live}</a> 
      </p>
    </div>
  );
};

export default ResumeProject;
