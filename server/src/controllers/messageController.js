const { addNewMessage, getMessages } = require('../services/messageService')
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

async function handleGetMessages(req, res, next) {
    try {
        const messages = await getMessages(req.params.roomId);
        return res.status(200).json({
            message: 'All messages',
            messages
        })
    } catch (error) {
        if (error.statusCode === 404) {
            return res.status(404).json({
                message: error.message
            })
        }
        next(error)
    }
}

module.exports = { handlePostMessage, handleGetMessages }