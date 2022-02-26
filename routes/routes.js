const express = require('express')
const { home } = require('../controller/func')
const route = express()
route.get('/',home)
module.exports = route