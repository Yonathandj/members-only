const Joi = require('joi');
const InvariantError = require('../Errors/InvariantError');

const signUpDataValidatorSchema = Joi.object({
    firstName: Joi.string().min(3).trim().required(),
    lastName: Joi.string().min(5).trim().required(),
    email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }).trim().required(),
    password: Joi.string().min(10).trim().required(),
    confirmPassword: Joi.ref('password'),
})

const signUpDataValidation = (data) => {
    const { error } = signUpDataValidatorSchema.validate(data);
    if (error) {
        throw new InvariantError(error.message, 400);
    }
}

module.exports = signUpDataValidation;