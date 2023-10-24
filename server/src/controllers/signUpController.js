const { addNewUser } = require("../services/usersService");
const signUpNewUserDataValidation = require("../validators/signUpValidator");

async function signUpNewuser(req, res, next) {
    try {
        signUpNewUserDataValidation(req.body);
        await addNewUser(req.body);
        res.status(200).json({
            message: 'Registration successful'
        });
    } catch (error) {
        if (error.statusCode === 400) {
            res.status(400).json({
                message: error.message,
            });
        }
        next(err)
    }
}

module.exports = { signUpNewuser };