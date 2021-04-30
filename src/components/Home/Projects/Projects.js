import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ParticlesContainer from '../../../ParticlesContainer/ParticlesContainer';
import './Projects.css'
const Projects = () => {
    return (
            <div className='mt-5 container App'
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%"
                }}
            >
                <ParticlesContainer />
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%"
                    }}
                >
                    <h1 className=' text-white text-center text-uppercase text-shadow'>Projects</h1>
                    <span className='divider'></span>
                    <span className='divider2'></span>
                    <Link to='/projects' className="btn btn-success">Go To Projects</Link>
                </div>
            </div>
    );
};

export default Projects;