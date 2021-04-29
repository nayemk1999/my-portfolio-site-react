import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Skill = () => {
    const now = 90
    return (
        <div className='mt-5 text-shadow text-center text-uppercase container App'>
            <h1>SKILLS</h1>
            <span className='divider'></span>
            <span className='divider2'></span>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div >
                        <ProgressBar className="mb-2" animated striped variant="success" now={now} label={`${now}%`} />
                        <ProgressBar className="mb-2" animated striped variant="info" now={now} label={`${now}%`} />
                        <ProgressBar className="mb-2" animated striped variant="warning" now={now} label={`${now}%`} />
                        <ProgressBar className="mb-2" animated striped variant="danger" now={now} label={`${now}%`} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="">
                        <ProgressBar className="mb-2" animated striped variant="success" now={now} label={`${now}%`} />
                        <ProgressBar className="mb-2" animated striped variant="info" now={now} label={`${now}%`} />
                        <ProgressBar className="mb-2" animated striped variant="warning" now={now} label={`${now}%`} />
                        <ProgressBar className="mb-2" animated striped variant="danger" now={now} label={`${now}%`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;