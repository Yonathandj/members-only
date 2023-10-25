const express = require('express');
const router = express.Router();

const { isAuthenticated } = require('../auth/authCheck');
const { handlePostMessage } = require('../controllers/messageController');

router.post('/', isAuthenticated, handlePostMessage);
module.exports = router;