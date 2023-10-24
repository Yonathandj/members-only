const signUpDataValidation = require("../validators/auth");

function handleSignUp(req, res) {
    try {
        signUpDataValidation(req.body);
        res.status(200).json(req.body);
    } catch (error) {
        if (error.statusCode === 400) {
            res.status(400).json({
                message: error.message,
                data: req.body
            });
        }
    }
}

module.exports = { handleSignUp };