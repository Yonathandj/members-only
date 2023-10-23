const signUpDataValidation = require("../validators/signUpValidator");

function handleSignUp(req, res) {
    try {
        signUpDataValidation(req.body);
    } catch (error) {
        
    }
}

module.exports = handleSignUp;