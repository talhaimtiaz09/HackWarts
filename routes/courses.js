const express = require('express')
const router = express.Router()
const coursesController = require('../controllers/courses')

router.get('/', coursesController.getCourses)
router.get('/:id/courseContent', coursesController.getCourseContent)
router.get('/:id/courseContent/assignments', coursesController.getAssignments)
router.get('/:id/courseContent/quizzes', coursesController.getQuizzes)
router.get('/:id/courseContent/midsFinals', coursesController.getMidsFinals)

module.exports = router