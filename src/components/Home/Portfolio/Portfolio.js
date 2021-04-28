import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ParticlesContainer from '../../../ParticlesContainer/ParticlesContainer';
import './Portfolio.css'
const Portfolio = () => {
    return (
            <div className='mt-5'
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
                    <h1 className=' text-white text-center text-uppercase text-shadow'>Portfolio</h1>
                    <span className='divider'></span>
                    <span className='divider2'></span>
                    <button className="btn btn-success">Go To Portfolio</button>
                </div>
            </div>
    );
};

export default Portfolio;