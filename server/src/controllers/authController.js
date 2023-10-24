const signUpDataValidation = require("../validators/authValidator");

function postSignUp(req, res) {
    try {
        signUpDataValidation(req.body);
        res.status(200).json({
            message: 'Registration successful'
        });
    } catch (error) {
        if (error.statusCode === 400) {
            res.status(400).json({
                message: error.message,
                data: req.body
            });
        }
    }
}

module.exports = { postSignUp };