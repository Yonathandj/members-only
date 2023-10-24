const invariantError = require('../errors/invariantError');
const Joi = require('joi');

const signUpNewUserDataValidatorSchema = Joi.object({
    firstName: Joi.string().min(3).trim().required(),
    lastName: Joi.string().min(5).trim().required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).trim().normalize().required(),
    password: Joi.string().min(10).trim().normalize().required(),
    confirmPassword: Joi.ref('password'),
})

const signUpNewUserDataValidation = (data) => {
    const { error } = signUpNewUserDataValidatorSchema.validate(data);
    if (error) {
        throw new invariantError(error.message, 400);
    }
}

module.exports = signUpNewUserDataValidation;