const Courses = require('../models/courses')
const Contribution = require('../models/contributions')
const Assignments = require('../models/assignments')
const Quizzes = require('../models/quizzes')
const MidsFinals = require('../models/midsfinals')
const passport = require('passport')
const Users = require('../models/users')
const cloudinary = require('../middleware/cloudinary')

module.exports = {
    getIndex: (req, res) => {
        let loggedInUser = []
        loggedInUser.push(req.user)
        res.render('home.ejs', { user: loggedInUser })
    },
    getAboutUs: (req, res) => {
        let loggedInUser = []
        loggedInUser.push(req.user)
        res.render('aboutUs.ejs', { user: loggedInUser })
    },
    getDashboard: async (req, res) => {
        const contributionsList = await Contribution.find()
        let loggedInUser = []
        loggedInUser.push(req.user)
        res.render('dashboard.ejs', { contributions: contributionsList, user: loggedInUser })
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
        res.redirect('/')
        // req.session.destroy((err) => {
        //   if (err) console.log('Error : Failed to destroy the session during logout.', err)
        //   req.user = null
        // })
    },
    getContribute: async (req, res) => {
        const coursesList = await Courses.find().lean()
        let loggedInUser = []
        loggedInUser.push(req.user)
        res.render('contribute.ejs', { courses: coursesList, user: loggedInUser })
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
    deleteContribution: async (req, res) => {
        // console.log(req.body)
        try {
        //   console.log("server")
            await Contribution.findOneAndDelete({ cloudinaryId: req.body.cloudinID });
            // console.log(contrib)
            // Delete image from cloudinary
            // await cloudinary.uploader.destroy(contrib.cloudinaryId);
            // Delete document from db
            // await Contribution.remove({ cloudinaryId: req.body.cloudinID });
            
            console.log("Deleted Contribution");
            res.redirect("/xlzjoorD6C");
        } 
        catch (err) {
          res.redirect("/");
        }
    },
    approveAssignment: async (req, res) => {
        console.log(req.body)
        // console.log(req.body.course)
        try{
            const reqCourse = await Courses.findOne({ courseCode: req.body.course }).lean()
            // console.log(reqUser)
            const courseID = reqCourse._id
            // console.log(courseID)
            await Assignments.create({
                fileName: req.body.fileName,
                fileLink: req.body.fileLink,
                courseID: courseID,
                user: req.body.contributingUser
            })
            console.log('Assignment has been approved!')
            res.redirect('/')
        } 
        catch (err) {
          res.redirect("/");
        }
    },
    approveQuiz: async (req, res) => {
        console.log(req.body)
        // console.log(req.body.course)
        try{
            const reqCourse = await Courses.findOne({ courseCode: req.body.course }).lean()
            // console.log(reqUser)
            const courseID = reqCourse._id
            // console.log(courseID)
            await  Quizzes.create({
                fileName: req.body.fileName,
                fileLink: req.body.fileLink,
                courseID: courseID,
                user: req.body.contributingUser
            })
            console.log('Quiz has been approved!')
            res.redirect('/')
        } 
        catch (err) {
          res.redirect("/");
        }
    },
    approveMidFinal: async (req, res) => {
        console.log(req.body)
        // console.log(req.body.course)
        try{
            const reqCourse = await Courses.findOne({ courseCode: req.body.course }).lean()
            // console.log(reqUser)
            const courseID = reqCourse._id
            // console.log(courseID)
            await MidsFinals.create({
                fileName: req.body.fileName,
                fileLink: req.body.fileLink,
                courseID: courseID,
                user: req.body.contributingUser
            })
            console.log('Mid/Final has been approved!')
            res.redirect('/')
        } 
        catch (err) {
          res.redirect("/");
        }
    },
}