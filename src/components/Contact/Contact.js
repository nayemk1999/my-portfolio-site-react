import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import NavBar from '../Home/Header/NavBar/NavBar';

const Contact = () => {
    return (
        <div className='container'>
            <NavBar></NavBar>
            <div className="row">
                <div className="col form">
                    <ContactForm></ContactForm>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;