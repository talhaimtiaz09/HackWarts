const Courses = require('../models/courses')
const passport = require('passport')

module.exports = {
    getIndex: (req, res) => {
        res.render('home.ejs')
    },
    getAboutUs: (req, res) => {
        res.render('aboutUs.ejs')
    },
    getDashboard: (req, res) => {
        res.render('dashboard.ejs')
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
    }
}