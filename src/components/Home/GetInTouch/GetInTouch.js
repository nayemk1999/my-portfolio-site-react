import React from 'react';
import { useForm } from 'react-hook-form';

const GetInTouch = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='mt-5'>
            <h1 className=' text-white text-center text-uppercase text-shadow'>Get in touch</h1>
            <span className='divider'></span>
            <span className='divider2'></span>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue="" placeholder='Enter your name' {...register("name", { required: true })} /> <br/>
                        {errors.name && <span>This field is required</span>}
                        <input placeholder='Enter your email' {...register("email", { required: true })} /><br/>
                        {errors.email && <span>This field is required</span>}
                        <input type='text-area' placeholder='Enter your message' {...register("message", { required: true })} /><br/>
                        {errors.message && <span>This field is required</span>}
                        <input type="submit" />
                    </form>
                </div>
                <div className="col-md-6">
                    <h1>Map..............</h1>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;