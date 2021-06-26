import React from 'react';
import { addResponseMessage, Widget } from 'react-chat-widget';
import About from '../About/About';
import 'react-chat-widget/lib/styles.css';
import Footer from '../Footer/Footer';
import GetInTouch from '../GetInTouch/GetInTouch';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';
import { useEffect } from 'react';

const Home = () => {

    // useEffect(() => {
    //     addResponseMessage('Welcome to this awesome chat!');
    // }, []);
    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
        // addResponseMessage(response);
    };
    return (
        <div>
            <Header></Header>
            <About></About>
            <Skill></Skill>
            <Projects />
            <GetInTouch></GetInTouch>
            <Footer></Footer>
            <Widget
                subtitle="Please Send Your Your Text. "
                handleNewUserMessage={handleNewUserMessage}
            />
        </div>
    );
};

export default Home;