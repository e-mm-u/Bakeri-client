import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs-Bakeri');
    const [blogs, setblogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setblogs(data))
    }, [])
    return (
        <div className='my-8 p-8'>
            <h1 className='text-center text-3xl font-semibold uppercase'>Happy reading :) </h1>
            {blogs.map(blog =>
                <div className="collapse my-2">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title  bg-red-50 text-black peer-checked: bg-red-50 peer-checked:text-black">
                        {blog.title}
                    </div>
                    <div className="collapse-content  bg-red-50 text-black peer-checked: bg-red-50 peer-checked:text-black">
                        <h3>{blog.title}</h3>
                        <p>{blog.details}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blogs;