const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')

const app = express()
const dbURI = "mongodb+srv://mathiblog:test1234@blogs.t5ptwrq.mongodb.net/blog-data?retryWrites=true&w=majority"

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })//the 2nd arg is to avoid deprecation warnings
    .then((result) => {
        app.listen(5000);
        console.log('connected to db')
    })
    .catch((err) => {
        console.log(err)
    })


//http logger
app.use(morgan('dev'))

app.use(express.json())


//routes
app.get('/', (req, res) => {
    res.redirect('/blogs')
})

//blog routes
app.use('/blogs', blogRoutes)


