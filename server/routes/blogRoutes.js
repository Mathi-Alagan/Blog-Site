const express = require('express')
const blogController = require('../controllers/blogController')


const router = express.Router()

//blog
router.get('/api', blogController.blog_index)

//blog details
router.get('/:id', blogController.blog_details)

//create blog
router.post('/create', blogController.blog_create_post)

//edit blog
router.put('/edit', blogController.blog_edit_put)

//delete blog
router.delete('/:id', blogController.blog_delete)

module.exports = router