const mongoose = require('mongoose');

const messageModelSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.String,
        ref: 'User'
    },
    roomId: {
        type: mongoose.Schema.Types.String,
        ref: 'Room'
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

module.exports = mongoose.model('Message', messageModelSchema);