require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
mongoose.connect(process.env.MONGO_URL).catch(error => {
    throw new Error(error)
});

const signUpRouter = require('./routers/signUpRouter');

app.use('/sign-up', signUpRouter);

app.use((error, req, res, next) => {
    res.status(500).json({ error })
})
app.listen(process.env.SERVER_PORT, () => {
    console.log(`server is running on port:${process.env.SERVER_PORT}`)
})