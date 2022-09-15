const Courses = require('../models/courses')

module.exports = {
    getCourses: async (req, res) => {
        const coursesList = await Courses.find()
        res.render('courses.ejs', {courses: coursesList})
    },
    getCourseContent: (req, res) => {
        res.render('courseContent.ejs')
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