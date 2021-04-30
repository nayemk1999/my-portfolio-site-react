import React from 'react';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <section>
            <div className="m-auto text-center">
                <a href="https://drive.google.com/u/0/uc?id=1ElFdYPB4y_vCnXwPLJ_DOChyPJbxAtlJ&export=download" download>
                    <button className="btn btn-success">Download My Resume</button>
                </a>
            </div>
            <div className='row align-items-center headerMain App'>
                <div className="col-md-6">
                    <h4>HELLO, MY NAME IS</h4>
                    <h1>NAYEM KHAN</h1>
                    <p>I am a Web Designer/Developer.A HTML,CSS,JavaScript, React & MongoDB expert.I always maintain a good relationships with my Team Member.</p>
                    <button className="btn btn-success">Hire Me</button>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src="https://i2.wp.com/nayemkhan.com/wp-content/uploads/2020/11/My-picture0-ox8zgmumk0jnjuqoczmh1692r810mope5gpdregctw.jpg?fit=370%2C370&ssl=1" alt="" />
                </div>
            </div>
        </section>

    );
};

export default HeaderMain;