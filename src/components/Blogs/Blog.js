import React, { useState } from 'react';
import ReadMoreReact from 'read-more-react';

const Blog = (props) => {
    const {thumbnail, title, link, pubDate } = props.blog
    const loading = props.loading
    const setLoading = props.setLoading
    setLoading(thumbnail);
    return (
        <div className="col-md-12">
            <div class="card text-center p-4 m-2 rounded">
            <div class="card-header ">
                {
                    loading ?  <img className='img-fluid' src={thumbnail} alt="Blogs Thumbnail Loading.." />
                    :
                    <div class="ml-auto p-2">
                        <div class="spinner-border text-danger " style={{ width: '2rem', height: '2rem' }} role="status">
                        </div>
                    </div>
                } 
                <h5 class="card-title mt-2">{title}</h5>
                <p class="card-text">Published Date: {pubDate}</p>
                <ReadMoreReact 
                style={{color: 'red'}}
                text={'With supporting text below as a natural lead-in to additional content Just Click Read more.'}
				// min={10}
				// ideal={20}
                />
                <a href={link} rel="noreferrer" target='_blank' className="btn btn-primary">Read more</a>
            </div>
        </div>
        </div>
    );
};

export default Blog;