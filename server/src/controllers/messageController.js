const messageDataValidation = require("../validators/messageValidator")

async function handlePostMessage(req, res, next) {
    try {
        const value = messageDataValidation(req.body);
        await addNewMessage(value);
        return res.status(200).json({
            message: 'Message successfully created'
        })
    } catch (error) {
        if (error.statusCode === 400) {
            return res.status(400).json({
                message: error.message
            })
        }
        next(error)
    }
}

module.exports = { handlePostMessage }