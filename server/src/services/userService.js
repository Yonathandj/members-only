const bcrypt = require('bcrypt');
const { nanoid } = require('nanoid');

const invariantError = require('../errors/invariantError');
const userModel = require('../models/userModel');

async function addNewUser({ firstName, lastName, email, password, isAdmin }) {
    const userExist = await userModel.findOne({ firstName, lastName }).exec();
    if (userExist) {
        throw new invariantError("User already exist", 400);
    }
    const _id = `user-${nanoid(16)}`;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
        _id,
        firstName,
        lastName,
        email,
        hashPassword,
        isAdmin
    })
    return await newUser.save();
}

module.exports = { addNewUser }