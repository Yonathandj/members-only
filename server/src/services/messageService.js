const { nanoid } = require("nanoid");
const messageModel = require("../models/messageModel");

async function addNewMessage({ message }) {
    const _id = `message-${nanoid(16)}`;
    const createdAt = new Date();
    const newMessage = new messageModel({
        _id,
        message,
        createdAt
    })
    return await newMessage.save();
}

module.exports = { addNewMessage };