const express = require('express')
const router = express.Router()
const passport = require('passport')
const userController = require('../controllers/users')

router.get('/signUp', userController.getSignUp)
router.get('/signIn', userController.getSignIn)
router.post('/signingUp', userController.signingUp)
router.post('/signingIn', userController.signingIn)

module.exports = router