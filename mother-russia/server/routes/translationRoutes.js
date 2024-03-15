const express = require('express')
const router = express.Router()
const { translateText } = require('../controller.js')

router.post('/translate', translateText)

module.exports = router