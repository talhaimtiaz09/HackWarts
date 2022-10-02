const Courses = require('../models/courses')
const Assignments = require('../models/assignments')
const Quizzes = require('../models/quizzes')
const MidsFinals = require('../models/midsfinals')

module.exports = {
    getCourses: async (req, res) => {
        const coursesList = await Courses.find()
        let loggedInUser = []
        loggedInUser.push(req.user)
        res.render('courses.ejs', {courses: coursesList, user: loggedInUser })
    },
    getCourseContent: async (req, res) => {
        try {
            const course = await Courses.findById(req.params.id);
            let loggedInUser = []
            loggedInUser.push(req.user)
            res.render("courseContent.ejs", { course: course, user: loggedInUser });
          } catch (err) {
            console.log(err);
          }
    },
    getAssignments: async (req, res) => {
        try {
          const course = await Courses.findById(req.params.id);
          // console.log(req.params.id)
          const assignmentsList = await Assignments.find({ courseID: req.params.id })
          // console.log(assignmentsList)
          let loggedInUser = []
          loggedInUser.push(req.user)
          res.render("assignments.ejs", { course: course, assignments: assignmentsList, user: loggedInUser });
        } catch (err) {
          console.log(err);
        }
    },
    getQuizzes: async (req, res) => {
        try {
          const course = await Courses.findById(req.params.id);
          const quizzesList  = await Quizzes.find({ courseID: req.params.id })
          let loggedInUser = []
          loggedInUser.push(req.user)
          res.render("quizzes.ejs", { course: course, quizzes: quizzesList, user: loggedInUser });
        } catch (err) {
          console.log(err);
        }
    },
    getMidsFinals: async (req, res) => {
        try {
          const course = await Courses.findById(req.params.id);
          const midsFinalsList = await MidsFinals.find({ courseID: req.params.id })
          let loggedInUser = []
          loggedInUser.push(req.user)
          res.render("midsFinals.ejs", { course: course, midsfinals: midsFinalsList, user: loggedInUser });
        } catch (err) {
          console.log(err);
        }
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