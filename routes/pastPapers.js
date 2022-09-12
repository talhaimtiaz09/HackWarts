const express = require('express')
const router = express.Router()
const pastPapersController = require('../controllers/pastPapers')

router.get('/', pastPapersController.getPastPapers)

module.exports = router