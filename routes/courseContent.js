const express = require('express')
const router = express.Router()
const courseContentController = require('../controllers/courseContent')

router.get('/', courseContentController.getCourseContent)

module.exports = router