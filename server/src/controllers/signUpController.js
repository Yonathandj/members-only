const { addNewUser } = require("../services/userService");
const signUpNewUserDataValidation = require("../validators/signUpValidator");

async function handleSignUp(req, res, next) {
    try {
        const value = signUpNewUserDataValidation(req.body);
        await addNewUser(value);
        res.status(200).json({
            message: 'Registration success',
        });
    } catch (error) {
        if (error.statusCode === 400) {
            res.status(400).json({
                message: error.message,
            });
        }
        next(error)
    }
}

module.exports = { handleSignUp };