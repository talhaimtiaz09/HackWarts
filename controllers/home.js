const Courses = require('../models/courses')
const Contribution = require('../models/contributions')
const passport = require('passport')
const Users = require('../models/users')
const cloudinary = require('../middleware/cloudinary')

module.exports = {
    getIndex: (req, res) => {
        res.render('home.ejs')
    },
    getAboutUs: (req, res) => {
        res.render('aboutUs.ejs')
    },
    getDashboard: async (req, res) => {
        const contributionsList = await Contribution.find()
        res.render('dashboard.ejs', { contributions : contributionsList })
    },
    createCourse: async (req, res) => {
        try{
            await Courses.create({courseTitle: req.body.courseTitle, courseCode: req.body.courseCode})
            console.log('Course has been added!')
            res.redirect('/')
        }   
        catch(err){
            console.log(err)
        }
    },
    signingOut: (req, res) => {
        req.logout(() => {
          console.log('User has logged out.')
        })
        res.redirect('/users/signIn')
        // req.session.destroy((err) => {
        //   if (err) console.log('Error : Failed to destroy the session during logout.', err)
        //   req.user = null
        // })
    },
    getContribute: async (req, res) => {
        const coursesList = await Courses.find().lean()
        res.render('contribute.ejs', { courses: coursesList })
    },
    contributing: async (req, res) => {
        // console.log(req.body)
        // console.log(req.file.path)
        // console.log(req.user)
        try{

            const result = await cloudinary.uploader.upload(req.file.path)
            await Contribution.create({
                name: req.user.userName,
                course: req.body.course, 
                category: req.body.category,
                filename: req.body.filename,
                pdf: result.secure_url,
                cloudinaryId: result.public_id
            })
            console.log('Contribution has been added!')
            res.redirect('/')
        }   
        catch(err){
            console.log(err)
        }
    },
}