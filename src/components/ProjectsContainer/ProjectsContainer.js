import React from 'react';
import NavBar from '../Home/Header/NavBar/NavBar';
import { projectsData } from '../Resume/ResumeData';
import ProjectContainer from './ProjectContainer';

const ProjectsContainer = () => {
    return (
        <section>
            <NavBar></NavBar>
            <div className='container'>
                {
                    projectsData.map(project => <ProjectContainer project={project}></ProjectContainer>)
                }
            </div>
        </section>
    );
};

export default ProjectsContainer;