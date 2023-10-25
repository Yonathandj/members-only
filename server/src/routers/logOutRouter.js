const express = require('express');
const router = express.Router();

const { isAuthenticated } = require('../auth/authCheck');
const { handleLogOut } = require('../controllers/logOutController');

router.post('/', isAuthenticated, handleLogOut)

module.exports = router