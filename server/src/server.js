require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());

const authRouter = require('./routes/auth');

app.use('/auth', authRouter);

app.use((err, req, res, next) => {
    res.status(500).json(err)
})
app.listen(process.env.SERVER_PORT, () => {
    console.log(`server is running on port:${process.env.SERVER_PORT}`)
})