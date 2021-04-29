import React from 'react';
import { useForm } from 'react-hook-form';
import './GetInTouch.css'
import GoogleMaps from './GoogleMaps';

const GetInTouch = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='mt-5 container p-5'>
            <h1 className=' text-white text-center text-uppercase text-shadow'>Get in touch</h1>
            <span className='divider'></span>
            <span className='divider2'></span>
            <div className="row align-items-center p-5">
                <div className="col-md-6 form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='form-control' id='name' defaultValue="" placeholder='Enter your name' {...register("name", { required: true })} /> <br/>
                        {errors.name && <span>This field is required</span>}
                        <input className='form-control' placeholder='Enter your email' {...register("email", { required: true })} /><br/>
                        {errors.email && <span>This field is required</span>}
                        <input className='form-control' type='text-area' placeholder='Enter your message' {...register("message", { required: true })} /><br/>
                        {errors.message && <span>This field is required</span>}
                        <input className="btn btn-success" value='Send Message' type="submit" />
                    </form>
                </div>
                <div className="col-md-6 map">
                    <GoogleMaps></GoogleMaps>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;