import React, { useEffect, useState } from "react";
import useBlog from "../../context/blog";

export default function Home() {

    const [blogs, setBlogs] = useState([])
    const { blog, setBlog } = useBlog()
    useEffect(() => {
        fetch('/blogs/api', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                setBlogs(data.blogs)
                setBlog(null)
            })
            .catch(err => console.log(err))

    }, [])

    console.log("inside home", blog)

    const renderBlogs = blogs.length > 0 ? blogs.map(item => {

        let blogId = item._id.toString()
        return (
            <a className="single" href={`blogs/${blogId}`} aria-label="Blog" key={item._id}>
                <h3 className="title">{item.title} </h3>
                <p className="snippet">{item.snippet}  </p>
            </a>
        )
    }) : <p>There are no blogs</p>

    return (
        <div className="blogs content">

            <h2>All Blogs</h2>
            {renderBlogs}
        </div>
    )
}

