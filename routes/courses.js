const express = require('express')
const router = express.Router()
const coursesController = require('../controllers/courses')

router.get('/', coursesController.getCourses)
router.get('/:id/courseContent', coursesController.getCourseContent)

module.exports = router