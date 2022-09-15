const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex)
router.get('/aboutUs', homeController.getAboutUs)
router.get('/dashboard', homeController.getDashboard)
// router.get('/courses', homeController.getCourses)
router.post('/addCourse', homeController.createCourse)

module.exports = router