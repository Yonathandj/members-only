const mongoose = require('mongoose');

const roomModelSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("room", roomModelSchema);