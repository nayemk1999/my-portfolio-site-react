import React from 'react';
import ReadMoreReact from 'read-more-react';

const Blog = (props) => {
    const {thumbnail, title, link, pubDate } = props.blog
    console.log(thumbnail);
    return (
        <div className="col-md-12">
            <div class="card text-center p-4 m-2 rounded">
            <div class="card-header ">
                <img className='img-fluid' src={thumbnail} alt="Blogs Thumbnail Loading.." />
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