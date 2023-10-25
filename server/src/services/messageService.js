const { nanoid } = require("nanoid");
const messageModel = require("../models/messageModel");

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

module.exports = { addNewMessage };