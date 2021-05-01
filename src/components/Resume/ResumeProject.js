import React from 'react';

const ResumeProject = (props) => {
    const {name, feature, resource, github, live} = props.project
    return (
        <div>
                    <h3>{name}</h3>
                    <p><strong>Feature:</strong> {feature}</p>
                    <p><strong>Resource:</strong> {resource}</p>
                    <p><strong>GitHub Link:</strong> {github}</p>
                    <p><strong>Website Link:</strong> {live}</p>
                  </div>
    );
};

export default ResumeProject;