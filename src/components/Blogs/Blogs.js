import React, { useEffect, useState } from 'react';
import NavBar from '../Home/Header/NavBar/NavBar';
import Blog from './Blog';

const Blogs = () => {
    const [loading, setLoading] = useState(false)
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@contact-nayemkhan')
            .then(res => res.json())
            .then(data => {
                setBlogs(data.items)
                setLoading(true)
            })
    }, [])
    return (
        <div>
            <NavBar></NavBar>
            <div className='row container m-auto'>
                {loading ?
                    blogs.map(blog => <Blog loading={loading} setLoading={setLoading} blog={blog} ></Blog>)
                    :
                    <div class="d-flex m-auto mt-5 p-5">
                        <div class="spinner-border text-danger mt-5" style={{ width: '3rem', height: '3rem' }} role="status">
                        </div>
                    </div>
                }

            </div>

        </div>
    );
};

export default Blogs;