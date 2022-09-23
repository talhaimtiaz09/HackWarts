const Courses = require('../models/courses')
const Contribution = require('../models/contributions')
const passport = require('passport')

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
    getContribute: (req, res) => {
        res.render('contribute.ejs')
    },
    contributing: async (req, res) => {
        try{
            await Contribution.create({
                course: req.body.course, 
                category: req.body.category
            })
            console.log('Contribution has been added!')
            res.redirect('/')
        }   
        catch(err){
            console.log(err)
        }
    },
}