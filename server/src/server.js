require('dotenv').config();

const cors = require('cors');
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session');

const authConfig = require("./auth/authConfig");

const signUpRouter = require('./routers/signUpRouter');
const signInRouter = require('./routers/signInRouter');
const roomRouter = require('./routers/roomRouter');
const messageRouter = require('./routers/messageRouter');
const logOutRouter = require('./routers/logOutRouter');

const app = express();
authConfig();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).catch(error => {
    throw new Error(error)
});

app.use('/sign-up', signUpRouter);
app.use('/sign-in', signInRouter);
app.use('/rooms', roomRouter);
app.use('/messages', messageRouter);
app.use('/log-out', logOutRouter);

app.use((error, req, res, next) => {
    return res.status(500).json({
        message: error.message
    })
})
app.listen(process.env.SERVER_PORT, () => {
    console.log(`server is running on port:${process.env.SERVER_PORT}`)
})