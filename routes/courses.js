const express = require('express')
const router = express.Router()
const coursesController = require('../controllers/courses')

router.get('/', coursesController.getCourses)

module.exports = router