const { nanoid } = require('nanoid');

const roomModel = require('../models/roomsModel');
const invariantError = require('../errors/invariantError');
const notFoundError = require('../errors/notFoundError');

async function addNewRoom({ name }) {
    const room = await roomModel.findOne({ name }).exec();
    if (room) {
        throw new invariantError('Room already exist', 400)
    }
    const _id = `room-${nanoid(16)}`;
    const newRoom = new roomModel({
        _id,
        name
    })
    return await newRoom.save();
}

async function getAllRooms() {
    const rooms = await roomModel.find().exec();
    return rooms;
}

async function editRoom({ _id, name }) {
    const room = await roomModel.findOne({ _id }).exec();
    if (!room) {
        throw new notFoundError('Room not found', 404);
    }
    return await roomModel.updateOne({ _id }, { name }).exec();
}

async function deleteRoom(_id) {
    const room = await roomModel.findOne({ _id }).exec();
    if (!room) {
        throw new notFoundError('Room not found', 404);
    }
    return await roomModel.deleteOne({ _id }).exec()
}

module.exports = { addNewRoom, getAllRooms, editRoom, deleteRoom }