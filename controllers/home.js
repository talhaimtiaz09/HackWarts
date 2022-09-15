const Courses = require('../models/courses')

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
}