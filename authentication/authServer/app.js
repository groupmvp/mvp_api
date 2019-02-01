const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const router  = require('./authRouter.js')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', router)


module.exports = app