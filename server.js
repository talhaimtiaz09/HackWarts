const express = require('express')
const app = express()
// const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const coursesRoutes = require('./routes/courses')
const aboutUsRoutes = require('./routes/aboutUs')
const courseContentRoutes = require('./routes/courseContent')
const pastPapersRoutes = require('./routes/pastPapers')

require('dotenv').config({path: './config/.env'})

// connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/courses', coursesRoutes)
app.use('/aboutUs', aboutUsRoutes)
app.use('/courseContent', courseContentRoutes)
app.use('/pastPapers', pastPapersRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`)
})