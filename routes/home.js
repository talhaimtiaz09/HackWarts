const express = require('express')
const router = express.Router()
const upload = require('../middleware/multer')
const homeController = require('../controllers/home')
const { ensureAuth } = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get('/aboutUs', homeController.getAboutUs)
router.get('/dashboard', homeController.getDashboard)
// router.get('/courses', homeController.getCourses)
router.get('/signingOut', homeController.signingOut)
router.get('/contribute', ensureAuth, homeController.getContribute)
router.post('/addCourse', homeController.createCourse)
router.post('/contributing', upload.single("file"), homeController.contributing)
router.delete('/deleteContribution', homeController.deleteContribution)

module.exports = router