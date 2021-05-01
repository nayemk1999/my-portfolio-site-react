import React from 'react';
import ContactForm from '../../ContactForm/ContactForm';
import './GetInTouch.css'
import GoogleMaps from './GoogleMaps';

const GetInTouch = () => {
    
    return (
        <div className='mt-5 container p-5'>
            <h1 className='text-center text-uppercase text-shadow'>Get in touch</h1>
            <span className='divider'></span>
            <span className='divider2'></span>
            <div className="row align-items-center p-5">
                <div className="col-md-6 form">
                    <ContactForm></ContactForm>
                </div>
                <div className="col-md-6 map">
                    <GoogleMaps></GoogleMaps>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;