const Joi = require("joi");
const invariantError = require("../errors/invariantError");

const roomValidationSchema = Joi.object({
    name: Joi.string().trim().min(3).required(),
})

const roomDataValidation = (body) => {
    const { value, error } = roomValidationSchema.validate(body);
    if (error) {
        throw new invariantError(error.message, 400);
    }
    return value;
}

module.exports = roomDataValidation