import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useBlog from '../../context/blog'

function Form() {

    const { blog, setBlog } = useBlog()

    const [currBlog, setCurrBlog] = useState(
        blog ?
            {
                title: blog.title,
                snippet: blog.snippet,
                body: blog.body
            } :

            {
                title: '',
                snippet: '',
                body: ''
            }
    )

    console.log("Inside form", blog)

    const navigate = useNavigate()

    function handleChange(event) {
        setCurrBlog(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }


    function postBlog() {
        fetch('/blogs/create', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(currBlog)
        })
            .then(res => res.json())
            .then(data => {
                navigate('/')
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    function editBlog() {
        fetch('/blogs/edit', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...currBlog,
                id: blog._id
            })
        })
            .then(res => res.json())
            .then(data => {
                navigate('/')
                setBlog(null)
                console.log(data)
            })
            .catch(err => console.log(err))
    }




    return (
        <div className="create-blog content">

            <label htmlFor="title">Blog title:</label>
            <input
                type="text"
                id="title"
                name="title"
                value={currBlog.title}
                onChange={handleChange}
                required />

            <label htmlFor="snippet">Blog snippet:</label>
            <input
                type="text"
                id="snippet"
                name="snippet"
                value={currBlog.snippet}
                onChange={handleChange}
                required />

            <label htmlFor="body">Blog body:</label>
            <textarea
                id="body"
                name="body"
                cols="30"
                rows="10"
                value={currBlog.body}
                onChange={handleChange}
                required></textarea>

            <button onClick={() => blog ? editBlog() : postBlog()}>Submit</button>

        </div>
    )
}

export default Form
