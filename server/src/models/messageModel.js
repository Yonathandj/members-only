const mongoose = require('mongoose');

const messageModelSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.String,
        ref: 'user'
    },
    roomId: {
        type: mongoose.Schema.Types.String,
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