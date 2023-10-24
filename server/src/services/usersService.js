const bcrypt = require('bcryptjs');
const { nanoid } = require('nanoid');

const invariantError = require('../errors/invariantError');
const userModel = require('../models/usersModel');

async function addNewUser({ firstName, lastName, email, password }) {
    const userExist = await userModel.findOne({ firstName, lastName }).exec();
    if (userExist) {
        throw new invariantError("User already exist", 400);
    }
    const _id = `user-${nanoid(16)}`;
    let hashPassword;
    await bcrypt.hash(password, 10, (err, hashPassword) => {
        if (err) {
            throw new Error(err);
        }
        hashPassword = hashPassword;
    });
    const newUser = new userModel({
        _id,
        firstName,
        lastName,
        email,
        hashPassword
    })
    return await newUser.save();
}

module.exports = { addNewUser }