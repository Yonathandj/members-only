const mongoose = require('mongoose');

const userModelSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    firstName: {
        type: String,
        minLength: 3,
        required: true,
    },
    lastName: {
        type: String,
        minLength: 3,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    hashPassword: {
        type: String,
        minLength: 10,
        required: true,
    },
    isAdmin: {
        type: Boolean,
    }
})

userModelSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`
})

module.exports = mongoose.model("User", userModelSchema);