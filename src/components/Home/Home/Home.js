import React from 'react';
import About from '../About/About';
import Education from '../Education/Education';
import GetInTouch from '../GetInTouch/GetInTouch';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Skill></Skill>
            <Portfolio></Portfolio>
            <Education></Education>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;