import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="row container align-items-center">
                <div className="col-md-6">
                    <h5>ALL RIGHTS RESERVED BY NAYEM KHAN</h5>
                </div>
                <div className="col-md-6 ">
                    <div className="social d-flex justify-content-end">
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;