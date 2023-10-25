const { addNewRoom, getAllRooms, editRoom } = require("../services/roomsService");
const roomDataValidation = require("../validators/roomValidator")

async function handleAddNewRoom(req, res, next) {
    try {
        const value = roomDataValidation(req.body);
        await addNewRoom(value);
        res.status(200).json({
            message: 'Room created successfully'
        })
    } catch (error) {
        if (error.statusCode(400)) {
            res.status(400).json({
                message: error.message
            })
        }
        next(error);
    }
}

async function handleGetAllRooms(req, res, next) {
    try {
        const rooms = await getAllRooms();
        res.status(200).json({
            message: 'All rooms',
            data: {
                rooms
            }
        })
    } catch (error) {
        next(error)
    }
}

async function handlePutRoom(req, res, next) {
    try {
        const value = roomDataValidation(req.body);
        const _id = req.params.roomId;
        await editRoom({ _id, name: value.name })
        res.status(200).json({
            message: 'Room successfully updated'
        })
    } catch (error) {
        if (error.statusCode === 404) {
            res.status(404).json({
                message: error.message
            })
        }
        next(error);
    }
}

async function handleDeleteRoom(req, res, next) {
    try {
        const _id = req.params.roomId;
        await deleteRoom(_id);
        res.status(200).json({
            message: 'Room successfully deleted'
        })
    } catch (error) {
        if (error.statusCode === 404) {
            res.status(404).json({
                message: error.message
            })
        }
        next(error)
    }
}

module.exports = { handleAddNewRoom, handleGetAllRooms, handlePutRoom, handleDeleteRoom }