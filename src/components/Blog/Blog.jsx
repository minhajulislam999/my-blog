import React from 'react';
import { BsBookmark } from "react-icons/bs";



const Blog = ({ blog, handleBookMark }) => {
    
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={blog.img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">

                    <div className="author flex items-center gap-2">
                        <img
                            src={blog.author.img}
                            alt={blog.author.name}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <span>{blog.author.name}</span>
                    </div>
                    

                    <div className="relative bg-gray-900 p-5 rounded-xl">
                        <button onClick={()=>handleBookMark(blog)} className="absolute top-4 right-4 text-gray-300 hover:text-yellow-400 transition">
                            <BsBookmark size={20} />
                        </button>

                        <h2 className="text-white text-xl font-semibold">
                            {blog.title}
                        </h2>
                    </div>



                    {/* <h2 className="text-xl font-semibold text-white hover:text-sky-400 transition">
                        {blog.title}
                    </h2> */}

                    <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                        {blog.description}
                    </p>


                    <div className="flex flex-wrap gap-2 mt-3">
                        {blog.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full cursor-pointer hover:bg-blue-200 transition"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Mark as Read
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Blog;