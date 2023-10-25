const mongoose = require('mongoose');

const messageModelSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    userId: {
        type: String,
        ref: 'user'
    },
    roomId: {
        type: String,
        ref: 'room'
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('message', messageModelSchema);