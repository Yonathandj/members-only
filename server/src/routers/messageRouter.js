const express = require('express');
const router = express.Router();

const { isAuthenticated } = require('../auth/authCheck');
const { handlePostMessage, handleGetMessages } = require('../controllers/messageController');

router.post('/', isAuthenticated, handlePostMessage);
router.get('/rooms/:roomId', isAuthenticated, handleGetMessages);
module.exports = router;