const Joi = require('joi');
const InvariantError = require('../Errors/InvariantError');

const signUpDataValidatorSchema = Joi.object({
    firstName: Joi.string().min(3).trim().normalize().required(),
    lastName: Joi.string().min(5).trim().normalize().required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).trim().normalize().required(),
    password: Joi.string().min(10).trim().normalize().required(),
    confirmPassword: Joi.ref('password'),
})

const signUpDataValidation = (data) => {
    const { error } = signUpDataValidatorSchema.validate(data);
    if (error) {
        throw new InvariantError(error.message, 400);
    }
}

module.exports = signUpDataValidation;