const express = require('express');
const validate = require('express-validation');
const passport = require('passport');


const {
    register,
    login
} = require('../database/authController.js')

const joiValidation = require('../validation/request-validation');
const passportServices = require('../validation/passport.js')


const router = express.Router();


router.route('/signup')
    .post(validate(joiValidation.signUp), register)


router.route('/login')
    .post(validate(joiValidation.login), passport.authenticate('jwt', {session: false}), login)





module.exports = router;