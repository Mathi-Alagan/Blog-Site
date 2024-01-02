import React from "react";
import { Link } from "react-router-dom";
import useBlog from "../context/blog";


export default function Navbar() {

    const { setBlog } = useBlog()
    function handleClick() {
        setBlog(null)
    }
    return (
        <nav className="nav-bar">
            <div className="site-title">
                <Link to="/">
                    <h1>Blog Site</h1>
                </Link>
                <p>Powered by Express & Mongoose</p>
            </div>
            <ul>
                <li><Link to="/">Blogs</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blogs/create" onClick={handleClick}>New Blog</Link></li>
            </ul>
        </nav>
    )
}