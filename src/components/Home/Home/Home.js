import React from 'react';
import About from '../About/About';
import 'react-chat-widget/lib/styles.css';
import Footer from '../Footer/Footer';
import GetInTouch from '../GetInTouch/GetInTouch';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';
import Chat from '../../Chat/Chat';

const Home = () => {

    return (
        <div>
            <Header></Header>
            <About></About>
            <Skill></Skill>
            <Projects />
            <GetInTouch></GetInTouch>
            <Footer></Footer>
            <Chat />
        </div>
    );
};

export default Home;