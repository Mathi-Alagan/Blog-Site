const Blog = require('../models/blog')

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.json({ blogs: result })
        })
        .catch((err) => {
            console.log(err)
        })
}


const blog_details = (req, res) => {

    const id = req.params.id

    Blog.findById(id)
        .then((result) => {
            console.log(result)
            res.json({ blog: result })
        })
        .catch((err) => {
            res.status(404).json({ error: 'Page Not Found' })
        })
}

const blog_create_post = (req, res) => {
    const { title, snippet, body } = req.body
    const blog = new Blog({
        title,
        snippet,
        body
    })

    blog.save()
        .then((blog) => {
            res.json(blog)
        })
        .catch((err) => {
            console.log(err)
        })
}

const blog_edit_put = (req, res) => {

    const { id, title, snippet, body } = req.body

    Blog.findByIdAndUpdate(id, {
        title,
        snippet,
        body
    })
        .then((result) => {
            res.json({ blog: result })
        })
        .catch((err) => {
            return res.status(422).json({ error: err })
        })
}

const blog_delete = (req, res) => {
    const id = req.params.id

    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ message: "Deleted successfully" })
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_post,
    blog_edit_put,
    blog_delete
}