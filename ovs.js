const express = require('express')
const bparser = require('body-parser')
const path = require ('path')
const ovs = express();
const routes = require('./routes/routes')
ovs.use(express.static(path.join(__dirname,'public')))
ovs.use(bparser.urlencoded({extended:false}))
ovs.set('view engine', 'ejs')
ovs.use('/',routes)
ovs.listen(3000)

