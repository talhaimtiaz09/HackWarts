const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const methodOverride = require('method-override')
const flash = require('connect-flash')
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const coursesRoutes = require('./routes/courses')
const userRoutes = require('./routes/users')
// const Contribution = require('../gikiWebsite/models/contributions')
// const aboutUsRoutes = require('./routes/aboutUs')
// const courseContentRoutes = require('./routes/courseContent')
// const pastPapersRoutes = require('./routes/pastPapers')

require('dotenv').config({path: './config/.env'})

require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(methodOverride("_method"))

app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: process.env.DB_STRING,
        collection: 'sessions'
      })
    })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())


// app.delete( '/deleteContribution', async (req, res) => {
//   console.log(req.body)
//   try {
//     console.log("server")
//     await Contribution.findOneAndDelete({ cloudinaryId: req.body.cloudinID });
//     // console.log(contrib)
//     // Delete image from cloudinary
//     // await cloudinary.uploader.destroy(contrib.cloudinaryId);
//     // Delete document from db
//     // await Contribution.remove({ cloudinaryId: req.body.cloudinID });
    
//     console.log("Deleted Contribution");
//     res.redirect("/dashboard");
//   } 
//   catch (err) {
//     res.redirect("/");
//   }
// })

app.use('/', homeRoutes)
app.use('/courses', coursesRoutes)
app.use('/users', userRoutes)
// app.use('/courseContent', courseContentRoutes)
// app.use('/aboutUs', aboutUsRoutes)
// app.use('/pastPapers', pastPapersRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`)
})