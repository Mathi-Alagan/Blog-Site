import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useBlog from '../../context/blog'
import Error from './Error'

export default function Blog() {

    const navigate = useNavigate()
    const { blog, setBlog } = useBlog()


    const url = new URL(window.location.href)
    useEffect(() => {
        console.log("inside useEffect", url.pathname)
        fetch(url.pathname, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                setBlog(data.blog)
            })
            .catch(err => console.log(err))
    }, [])


    function deleteBlog() {
        fetch(url.pathname, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                navigate('/')

            })
            .catch(err => console.log(err))
    }

    function editBlog() {
        navigate('/blogs/edit')
    }

    console.log("inside Blog", blog)
    return (

        blog ?
            <div className="details content">
                <h2>{blog.title}</h2>
                <div className="content">
                    <p>{blog.body}</p>
                </div>
                <a className="edit" onClick={editBlog} >
                    <img src="/edit_icon.svg" alt="delete" />
                </a>
                <a className="delete" onClick={deleteBlog} >
                    <img src="/trashcan.svg" alt="delete" />
                </a>
            </div>
            : <Error />
    )
}

