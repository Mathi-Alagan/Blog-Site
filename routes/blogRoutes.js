const express = require('express')
const blogController = require('../controllers/blogController')


const router = express.Router()

//blog
router.get('/', blogController.blog_index)
router.get('/create', blogController.blog_create_get)

//blog details
router.get('/:id', blogController.blog_details)

//create blog
router.post('/', blogController.blog_create_post)

//delete blog
router.delete('/:id', blogController.blog_delete)

module.exports = router