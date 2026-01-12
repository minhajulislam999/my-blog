import React from 'react';

const Blog = ({ blog }) => {
    console.log(blog);
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={blog.img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{blog.title}</h2>
                    <p>{blog.description}</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Mark as Read
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Blog;