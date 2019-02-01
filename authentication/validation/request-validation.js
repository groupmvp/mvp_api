const Joi = require('joi');

module.exports = {
    signUp: {
        body: {
            email: Joi.string().email().required(),
            username: Joi.string().alphanum().min(3).max(30).required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
        }
    },

    login: {
        body: {
            email: Joi.string().email().required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
        }
    }
}