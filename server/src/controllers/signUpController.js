const { addNewUser } = require("../services/userService");
const signUpNewUserDataValidation = require("../validators/signUpValidator");

async function handleSignUp(req, res, next) {
    try {
        let data;
        if (req.body.isAdmin === process.env.ADMIN_CODE) {
            data = {
                ...req.body, isAdmin: true
            }
        } else {
            data = {
                ...req.body, isAdmin: false
            }
        }
        const value = signUpNewUserDataValidation(data);
        await addNewUser(value);
        return res.status(200).json({
            message: 'Registration success',
        });
    } catch (error) {
        if (error.statusCode === 400) {
            return res.status(400).json({
                message: error.message,
            });
        }
        next(error)
    }
}

module.exports = { handleSignUp };