import { useEffect, useState } from 'react';
import Blog from '../../Blog/Blog';


const Blogs = () => {

    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        fetch('/Blog.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);


            })


    }, []);

    // console.log(blogs)
    return (
        <div>
            <h1>Total Blogs:{blogs.length}</h1>


            {/* {
                blogs.map((blog)=><Blogs blog={blog} />)
            } */}

            <div className="all-blogs grid grid-cols-2">
                {
                    blogs.map((blog => <Blog blog={blog} />))
                }
            </div>
        </div>
    );
};

export default Blogs;