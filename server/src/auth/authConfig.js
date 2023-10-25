const bcrypt = require('bcrypt')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const userModel = require('../models/userModel');

function authConfig() {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
    }, async (username, password, done) => {
        try {
            const user = await userModel.findOne({ email: username }).exec();
            if (!user) {
                return done(null, false, { message: 'User not found' })
            }
            bcrypt.compare(password, user.hashPassword, (error, result) => {
                if (result) {
                    return done(null, user)
                }
                return done(null, false, { message: 'Incorrect password' })
            })
        } catch (error) {
            return done(error)
        }
    }))

    passport.serializeUser((user, done) => {
        return done(null, user._id);
    })
    passport.deserializeUser(async (_id, done) => {
        try {
            const user = await userModel.findOne({ _id }).exec();
            return done(null, user);
        } catch (error) {
            return done(error)
        }
    })
}

module.exports = authConfig;