const Joi = require('joi');

const invariantError = require('../errors/invariantError');

const signUpNewUserDataValidatorSchema = Joi.object({
    firstName: Joi.string().trim().min(3).required(),
    lastName: Joi.string().trim().min(3).required(),
    email: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).normalize().required(),
    password: Joi.string().trim().min(10).required(),
    confirmPassword: Joi.ref('password'),
})

const signUpNewUserDataValidation = (data) => {
    const { value, error } = signUpNewUserDataValidatorSchema.validate(data);
    if (error) {
        throw new invariantError(error.message, 400);
    }
    return value;
}

module.exports = signUpNewUserDataValidation;