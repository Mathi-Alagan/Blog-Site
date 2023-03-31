const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')

const app = express()
const dbURI = "mongodb+srv://mathiblog:test1234@blogs.t5ptwrq.mongodb.net/blog-data?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })//the 2nd arg is to avoid deprecation warnings
    .then((result) => {
        app.listen(3000);
        console.log('connected to db')
    })
    .catch((err) => {
        console.log(err)
    })

//setting view engine
app.set('view engine', 'ejs')



//http logger
app.use(morgan('dev'))

//static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//routes
app.get('/', (req, res) => {
    res.redirect('/blogs')
})
app.get('/about', (req, res) => {
    res.render('about', { title: 'About us' })
})

//blog routes
app.use('/blogs', blogRoutes)

app.use((req, res) => {
    res.status(404).render('404', { title: '404 not found' })
})
