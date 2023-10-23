require('dotenv').config();

const express = require('express');
const app = express();



app.use((err, req, res, next) => {
    res.status(500).json(err)
})

app.listen(SERVER_PORT, () => {
    console.log(`server is running on port:${SERVER_PORT}`)
})