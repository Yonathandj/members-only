const Joi = require('joi');
const invariantError = require('../errors/invariantError');

const messageValidatorSchema = Joi.object({
    userId: Joi.string().trim().required(),
    roomId: Joi.string().trim.required(),
    message: Joi.string().trim().required()
})

const messageDataValidation = (data) => {
    const { value, error } = messageValidatorSchema.validate(data);
    if (error) {
        throw new invariantError(error.message, 400);
    }
    return value;
}

module.exports = messageDataValidation;