const express = require('express')
const router = express.Router()
const coursesController = require('../controllers/courses')

router.get('/', coursesController.getCourses)
router.get('/courseContent', coursesController.getCourseContent)

module.exports = router