import React from 'react';
import About from '../About/About';
import Education from '../Education/Education';
import Footer from '../Footer/Footer';
import GetInTouch from '../GetInTouch/GetInTouch';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Skill></Skill>
            <Projects/>
            {/* <Education></Education> */}
            <GetInTouch></GetInTouch>
            <Footer></Footer>
        </div>
    );
};

export default Home;