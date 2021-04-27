import React from 'react';
import CountUp from 'react-countup';
import './About.css'
const About = () => {
    return (
        <section className=' about-container'>
            <div className='mt-5 container'>
                <h1 className='p-5 text-white text-center text-uppercase text-shadow'>About Me</h1>
                <span className='divider'></span>
                <span className='divider2'></span>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className='text-uppercase'>nayem khan</h1>
                        <p>Hello, I am a Professional Web Developer , Certified and Experienced JavaScript & React Developer | Lead Generation & Desgin Expert.
Always – Available.. DESIDENCE – BANGLADESH</p>
                    </div>
                    <div className="col-md-6">
                        <h3>Completed Web Projects</h3>
                        <h1 className='text-white '><CountUp delay={2} end={100} /></h1>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default About;