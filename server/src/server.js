require('dotenv').config();

const express = require('express');
const app = express();

const signUpRouter = require('./routes/signUp');

app.use('/sign-up', signUpRouter);

app.use((err, req, res, next) => {
    res.status(500).json(err)
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`server is running on port:${process.env.SERVER_PORT}`)
})