const mongoose = require('mongoose');

const messageModelSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    userId: {
        type: String,
        ref: 'users'
    },
    roomId: {
        type: String,
        ref: 'rooms'
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