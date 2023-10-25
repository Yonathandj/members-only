const mongoose = require('mongoose');

const messageModelSchema = new mongoose.Schema({
    _id: {
        type: String,
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