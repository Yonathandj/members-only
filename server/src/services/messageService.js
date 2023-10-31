const { nanoid } = require("nanoid");
const messageModel = require("../models/messageModel");

const notFoundError = require('../errors/notFoundError');

async function addNewMessage({ userId, roomId, message }) {
    const _id = `message-${nanoid(16)}`;
    const createdAt = new Date();
    const newMessage = new messageModel({
        _id,
        userId,
        roomId,
        message,
        createdAt
    })
    return await newMessage.save();
}

async function getMessages(roomId) {
    const messages = await messageModel.find({ roomId }).populate('userId').exec();
    if (messages.length === 0) {
        throw new notFoundError('There are no messages have been created for this room yet', 404);
    }
    return messages;
}

module.exports = { addNewMessage, getMessages };